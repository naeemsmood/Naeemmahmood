import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Get the access key from environment variables
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    // Format field values for better readability
    const formatAnnualRevenue = (value: string) => {
      const map: { [key: string]: string } = {
        '200k-500k': '$200K - $500K',
        '500k-1m': '$500K - $1M',
        '1m-2m': '$1M - $2M',
        '2m+': '$2M+',
      };
      return map[value] || value;
    };

    const formatInvestmentReady = (value: string) => {
      const map: { [key: string]: string } = {
        'yes-full': 'Yes, ready to invest $3,500',
        'yes-payment-plan': 'Yes, prefer 3 payments of $1,200',
        'considering': 'Considering, would like to learn more',
      };
      return map[value] || value;
    };

    const formatCallTime = (value: string) => {
      const map: { [key: string]: string } = {
        'morning': 'Morning (8 AM - 12 PM EST)',
        'afternoon': 'Afternoon (12 PM - 5 PM EST)',
        'evening': 'Evening (5 PM - 8 PM EST)',
        'flexible': 'Flexible',
      };
      return map[value] || value;
    };

    // Format the email content
    const emailSubject = `New Academy Application: ${formData.name}`;
    const emailBody = `
New Academy Application Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLICANT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Annual Revenue: ${formatAnnualRevenue(formData.annualRevenue)}
Industry: ${formData.industry}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALIFICATION QUESTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

What is your biggest challenge right now?
${formData.biggestChallenge}

Why do you want to join The Peak Performers Academy?
${formData.whyJoin}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INVESTMENT & FOLLOW-UP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Investment Readiness: ${formatInvestmentReady(formData.investmentReady)}
${formData.bestCallTime ? `Best time for call: ${formatCallTime(formData.bestCallTime)}` : 'Best time for call: Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: '2-digit', 
  minute: '2-digit',
  timeZoneName: 'short'
})}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Send email via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: emailSubject,
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'naeemsmood@gmail.com',
        message: emailBody,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error('Web3Forms API error:', data);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

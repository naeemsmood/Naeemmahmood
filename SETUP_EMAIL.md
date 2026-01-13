# Email Setup Instructions

The academy application form is now configured to send email notifications to **naeemsmood@gmail.com** when someone submits an application.

## Setup Steps

### 1. Get Your Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email: **naeemsmood@gmail.com**
3. Click "Get Access Key"
4. Copy the access key you receive

### 2. Configure Environment Variables

1. Create a file named `.env.local` in the root of your project (same directory as `package.json`)
2. Add the following line to `.env.local`:

```
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Replace `your_access_key_here` with the access key you received from Web3Forms.

### 3. Restart Your Development Server

If your development server is running, restart it to load the new environment variables:

```bash
# Stop the server (Ctrl+C), then restart:
npm run dev
```

## Testing

1. Visit `/academy` page
2. Fill out and submit the application form
3. Check your email at **naeemsmood@gmail.com** for the notification

## What Gets Emailed

When someone submits the application, you'll receive an email with:
- Applicant's name
- Email address
- Phone number
- Annual revenue range
- Industry
- Their biggest challenge
- Why they want to join
- Investment readiness status
- Best time for a call (if provided)
- Timestamp of submission

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), make sure to add the `WEB3FORMS_ACCESS_KEY` environment variable in your hosting platform's environment variables settings.

### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `WEB3FORMS_ACCESS_KEY` with your access key value
4. Redeploy your application

## Troubleshooting

If emails aren't being received:
1. Verify `WEB3FORMS_ACCESS_KEY` is set correctly in `.env.local`
2. Check that the development server was restarted after adding the key
3. Check the browser console and server logs for any errors
4. Verify your access key at [web3forms.com](https://web3forms.com)

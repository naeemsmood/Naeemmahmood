export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'psychology-of-peak-performance',
    title: 'The Psychology of Peak Performance',
    excerpt: 'Discover the mental strategies top performers use to achieve extraordinary results in business and life.',
    content: `
      <p>Peak performance isn't just about working harder—it's about understanding the psychological principles that drive exceptional achievement.</p>
      
      <h2>The Mindset of Champions</h2>
      <p>Top performers share a unique mental framework that allows them to consistently deliver outstanding results. This mindset isn't innate—it's developed through intentional practice and understanding of psychological principles.</p>
      
      <h2>Mental Strategies for Success</h2>
      <p>The world's most successful individuals use specific mental techniques to maintain focus, overcome obstacles, and achieve their goals. These strategies can be learned and applied by anyone willing to invest in their personal development.</p>
      
      <h2>Applying Peak Performance Psychology</h2>
      <p>Whether you're an entrepreneur, athlete, or executive, understanding the psychology of peak performance can transform your results in both business and life. The key is consistent application of proven mental strategies.</p>
      
      <p>By mastering these psychological principles, you can unlock levels of performance you never thought possible.</p>
    `,
    date: '2024-01-15',
    author: 'Naeem Mahmood',
  },
  {
    slug: '5-daily-habits-exceptional-leaders',
    title: '5 Daily Habits of Exceptional Leaders',
    excerpt: 'Learn the goal-centered day-to-day patterns that separate great leaders from average ones.',
    content: `
      <p>Exceptional leadership isn't about grand gestures—it's about the consistent daily habits that compound over time to create extraordinary results.</p>
      
      <h2>Habit 1: Morning Clarity</h2>
      <p>Great leaders start each day with clarity about their priorities and values. This morning routine sets the tone for everything that follows.</p>
      
      <h2>Habit 2: Intentional Decision-Making</h2>
      <p>Exceptional leaders make decisions aligned with their goals and values, not based on impulses or immediate gratification.</p>
      
      <h2>Habit 3: Continuous Learning</h2>
      <p>The best leaders dedicate time daily to expanding their knowledge and perspective, recognizing that growth is a lifelong journey.</p>
      
      <h2>Habit 4: Meaningful Connection</h2>
      <p>Great leaders invest time daily in building genuine relationships with their team, understanding that leadership is fundamentally about people.</p>
      
      <h2>Habit 5: Evening Reflection</h2>
      <p>Exceptional leaders end each day with reflection, learning from their experiences and planning for continued improvement.</p>
      
      <p>These goal-centered patterns, practiced consistently, are what separate exceptional leaders from the rest.</p>
    `,
    date: '2024-01-10',
    author: 'Naeem Mahmood',
  },
  {
    slug: 'unlock-your-full-potential',
    title: 'Unlock Your Full Potential',
    excerpt: 'A practical guide to breaking through limitations and designing a life of purpose, freedom, and fulfillment.',
    content: `
      <p>Your full potential isn't a fixed destination—it's an ever-expanding horizon that you can reach through intentional action and mindset shifts.</p>
      
      <h2>Breaking Through Limitations</h2>
      <p>Most limitations are self-imposed, created by beliefs that no longer serve us. By identifying and challenging these limiting beliefs, we open doors to possibilities we never imagined.</p>
      
      <h2>Designing Your Life</h2>
      <p>Life design is about intentionally creating the experiences, relationships, and outcomes you want. It requires clarity about what matters most and the courage to pursue it relentlessly.</p>
      
      <h2>Purpose, Freedom, and Fulfillment</h2>
      <p>A life of true fulfillment comes from aligning your daily actions with your deeper purpose. This alignment creates a sense of freedom and satisfaction that goes beyond material success.</p>
      
      <h2>The Path Forward</h2>
      <p>Unlocking your full potential is a journey, not a destination. It requires consistent effort, self-awareness, and the willingness to grow beyond your current comfort zone.</p>
      
      <p>With the right mindset and practical tools, you can break through any limitation and design a life of extraordinary purpose, freedom, and fulfillment.</p>
    `,
    date: '2024-01-05',
    author: 'Naeem Mahmood',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}


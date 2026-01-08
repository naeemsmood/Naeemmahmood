import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peak Performance Blueprint - Master Peak Performance in 90 Days | Naeem Mahmood",
  description: "Learn the exact system used by 50,000+ high achievers to break through plateaus and achieve exponential growth. Self-study course with lifetime access. $997 investment.",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

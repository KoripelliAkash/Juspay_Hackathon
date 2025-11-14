import {
  Home,
  Package,
  Building,
  Briefcase,
  BookOpen,
  Headphones,
  FlaskConical,
  Leaf,
  TrendingUp,
  Mail,
  ChevronRight,
  Code,
  LineChart,
  GraduationCap,
} from 'lucide-react';

export const menuData = [
  {
    icon: Home,
    title: 'Home',
    description: 'Welcome to our comprehensive platform',
  },
  {
    icon: Package,
    title: 'Products & Services',
    description: 'Explore our comprehensive offerings',
    children: [
      {
        icon: Code,
        title: 'Technical Consulting',
        description: 'Architecture and implementation guidance',
      },
      {
        icon: Briefcase,
        title: 'Business Strategy',
        description: 'Digital transformation and business planning',
      },
      {
        icon: GraduationCap,
        title: 'Training & Workshops',
        description: 'Team skill development',
        // --- LEVEL 3 MENU ---
        children: [
           {
            icon: GraduationCap,
            title: 'On-site Workshops',
            description: 'In-person team training',
            // --- LEVEL 4 MENU ---
            children: [
              {
                icon: Code,
                title: 'Advanced React',
                description: 'Hooks, patterns, and performance'
              },
              {
                icon: Code,
                title: 'Design Systems',
                description: 'Building scalable UI'
              }
            ]
          },
          {
            icon: BookOpen,
            title: 'Digital Courses',
            description: 'Self-paced learning'
          },
        ]
      },
    ],
  },
  {
    icon: Building,
    title: 'Industry Solutions',
    description: 'Specialized solutions for different industries',
  },
  {
    icon: Briefcase,
    title: 'Company',
    description: 'Learn about our organization and culture',
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Knowledge base, tools, and learning materials',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Get help and support when you need it',
  },
  {
    icon: FlaskConical,
    title: 'Research & Innovation',
    description: 'Cutting-edge research and innovation initiatives',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Environmental responsibility and sustainable technology',
  },
  {
    icon: TrendingUp,
    title: 'Investor Relations',
    description: 'Financial information and investor resources',
  },
  {
    icon: Mail,
    title: 'Contact',
    description: 'Get in touch with our team',
  },
];
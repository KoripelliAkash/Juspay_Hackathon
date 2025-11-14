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
} from 'lucide-react'; // <-- CORRECTED

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
        description: 'Team skill development and knowledge transfer',
        children: [
           {
            icon: GraduationCap,
            title: 'Level 3 Menu',
            description: 'You can go as deep as you want',
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
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
  HeartHandshake,
  Users,
  FileText,
  Video,
  LifeBuoy,
  Ticket,
  ShieldCheck,
  Banknote,
  HeartPulse, 
  ShoppingCart,
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
        
        children: [
           {
            icon: GraduationCap,
            title: 'On-site Workshops',
            description: 'In-person team training',
            
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
    
    children: [
      {
        icon: Banknote,
        title: 'Fintech',
        description: 'Payments, banking, and insurance',
        children: [
          {
            icon: Code,
            title: 'Business Strategy: Payment Gateway',
            description: 'Integrate our payment solutions'
          },
          {
            icon: ShieldCheck,
            title: 'Fraud Detection',
            description: 'AI-powered security'
          }
        ]
      },
      {
        icon: ShoppingCart,
        title: 'E-commerce',
        description: 'Solutions for online retailers'
      },
      {
        icon: HeartPulse, 
        title: 'Healthcare',
        description: 'HIPAA-compliant platforms'
      }
    ]
  },
  {
    icon: Briefcase,
    title: 'Company',
    description: 'Learn about our organization and culture',
    
    children: [
      {
        icon: Users,
        title: 'About Us',
        description: 'Our mission and values'
      },
      {
        icon: HeartHandshake,
        title: 'Careers',
        description: 'Join our growing team',
        children: [
          {
            icon: Code,
            title: 'Engineering',
            description: 'View open roles'
          },
          {
            icon: LineChart,
            title: 'Marketing',
            description: 'View open roles'
          }
        ]
      },
      {
        icon: FileText,
        title: 'Press',
        description: 'News and announcements'
      }
    ]
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Knowledge base, tools, and learning materials',
    
    children: [
      {
        icon: FileText,
        title: 'Documentation',
        description: 'API refs and guides'
      },
      {
        icon: Video,
        title: 'Tutorials',
        description: 'Step-by-step video guides'
      },
      {
        icon: Briefcase,
        title: 'Case Studies',
        description: 'See our client success'
      }
    ]
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Get help and support when you need it',
    
    children: [
      {
        icon: LifeBuoy,
        title: 'Help Center',
        description: 'Find answers to FAQs'
      },
      {
        icon: Ticket,
        title: 'Submit a Ticket',
        description: 'Contact our support team'
      },
      {
        icon: ShieldCheck,
        title: 'System Status',
        description: 'Check our service uptime'
      }
    ]
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
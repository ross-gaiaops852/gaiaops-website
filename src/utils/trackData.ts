export interface Track {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  foundationLevel: string;
  advancedLevel: string;
  completeLevel: string;
  idealState: string;
  href: string;
  foundationDetails: {
    hours: string;
    weeks: string;
    description: string;
    features: string[];
    impact: string;
  };
  advancedDetails: {
    hours: string;
    weeks: string;
    description: string;
    features: string[];
    impact: string;
  };
  completeDetails: {
    hours: string;
    weeks: string;
    description: string;
    features: string[];
    impact: string;
  };
}

export const tracks: Track[] = [
  {
    id: 'multi-party-coordination',
    icon: '',
    title: 'Multi-Party Coordination Playbooks',
    subtitle: 'From coordination chaos to seamless collaboration',
    description: 'Three proven playbooks that eliminate project delays, communication breakdowns, and partner frustration through systematic coordination transformation.',
    color: '#4A9B8B', // Teal Primary
    foundationLevel: 'Foundation playbook: Airtable dashboard, basic integrations',
    advancedLevel: 'Advanced playbook: n8n automation, real-time sync',
    completeLevel: 'Complete playbook: AI Oracle, predictive analytics',
    idealState: 'Seamless partner collaboration with zero coordination meetings',
    href: '/services/multi-party-coordination',
    foundationDetails: {
      hours: '40 hours',
      weeks: '6 weeks',
      description: 'Foundation playbook delivering Airtable-based central project dashboard with basic partner integrations',
      features: [
        'Centralized project tracking dashboard',
        'Basic partner communication workflows',
        'Standardized status update processes',
        'Document sharing and version control'
      ],
      impact: '40% reduction in coordination meetings, clear project visibility'
    },
    advancedDetails: {
      hours: '50 hours',
      weeks: '7 weeks',
      description: 'Advanced playbook delivering n8n automation for real-time data sync across 5+ systems',
      features: [
        'Automated cross-platform synchronization',
        'Real-time status updates and notifications',
        'Intelligent task assignment and routing',
        'Performance analytics and bottleneck identification'
      ],
      impact: 'Zero manual status updates, proactive issue resolution'
    },
    completeDetails: {
      hours: '60 hours',
      weeks: '8 weeks',
      description: 'Complete playbook delivering RAG-enabled AI Oracle with predictive analytics and unlimited partner coordination',
      features: [
        'AI-powered project risk prediction',
        'Intelligent resource allocation recommendations',
        'Automated partner relationship optimization',
        'Predictive timeline and milestone adjustments'
      ],
      impact: 'Eliminate coordination surprises, strategic partner advantage'
    }
  },
  {
    id: 'client-relationships',
    icon: '',
    title: 'Client Relationship Playbooks',
    subtitle: 'From manual onboarding to systematic client success',
    description: 'Three proven playbooks that transform client relationships through automated onboarding, proactive success management, and expansion optimization.',
    color: '#1E3A5F', // Navy Primary
    foundationLevel: 'Foundation playbook: Automated intake, client portal',
    advancedLevel: 'Advanced playbook: Health scoring, automated communications',
    completeLevel: 'Complete playbook: AI client analysis, expansion identification',
    idealState: 'Self-managing client relationships with proactive success optimization',
    href: '/services/client-relationships',
    foundationDetails: {
      hours: '40 hours',
      weeks: '6 weeks',
      description: 'Foundation playbook delivering automated intake, basic client portal, standardized kickoff processes',
      features: [
        'Automated client onboarding workflows',
        'Client portal with project visibility',
        'Standardized kickoff and milestone processes',
        'Basic client communication templates'
      ],
      impact: '60% faster onboarding, consistent client experience'
    },
    advancedDetails: {
      hours: '45 hours',
      weeks: '7 weeks',
      description: 'Advanced playbook delivering predictive client health scoring, automated milestone communications',
      features: [
        'Client health scoring and risk identification',
        'Automated milestone and status communications',
        'Proactive issue escalation workflows',
        'Client satisfaction tracking and optimization'
      ],
      impact: '25% improvement in client retention, proactive relationship management'
    },
    completeDetails: {
      hours: '55 hours',
      weeks: '8 weeks',
      description: 'Complete playbook delivering AI-powered client analysis, automatic expansion identification',
      features: [
        'AI-powered client behavior analysis',
        'Predictive expansion opportunity identification',
        'Automated upselling and cross-selling workflows',
        'Strategic client relationship optimization'
      ],
      impact: '40% increase in client lifetime value, strategic partnership development'
    }
  },
  {
    id: 'resource-optimization',
    icon: '',
    title: 'Resource Optimization Playbooks',
    subtitle: 'From chaotic capacity to strategic allocation',
    description: 'Three proven playbooks that maximize team utilization, optimize project profitability, and enable strategic capacity expansion through systematic resource management.',
    color: '#E07A47', // Orange Accent
    foundationLevel: 'Foundation playbook: Capacity dashboards, project templates',
    advancedLevel: 'Advanced playbook: Real-time optimization, skills matching',
    completeLevel: 'Complete playbook: AI demand forecasting, automated sourcing',
    idealState: 'Perfect resource utilization with predictive capacity planning',
    href: '/services/resource-optimization',
    foundationDetails: {
      hours: '45 hours',
      weeks: '6 weeks',
      description: 'Foundation playbook delivering capacity planning dashboards, project templates, budget tracking',
      features: [
        'Real-time capacity planning dashboards',
        'Standardized project templates and workflows',
        'Budget tracking and profitability analysis',
        'Resource allocation optimization tools'
      ],
      impact: '30% improvement in team utilization, better project profitability'
    },
    advancedDetails: {
      hours: '50 hours',
      weeks: '7 weeks',
      description: 'Advanced playbook delivering real-time optimization algorithms, skills-based matching',
      features: [
        'Intelligent resource allocation algorithms',
        'Skills-based project matching and assignment',
        'Real-time capacity optimization recommendations',
        'Advanced profitability analytics and forecasting'
      ],
      impact: '50% improvement in utilization rates, strategic capacity expansion'
    },
    completeDetails: {
      hours: '60 hours',
      weeks: '8 weeks',
      description: 'Complete playbook delivering AI-powered demand forecasting, automated contractor sourcing',
      features: [
        'AI-powered demand forecasting and capacity planning',
        'Automated contractor sourcing and onboarding',
        'Predictive project staffing recommendations',
        'Strategic resource optimization across multiple projects'
      ],
      impact: 'Eliminate capacity bottlenecks, predictive scaling capabilities'
    }
  },
  {
    id: 'quality-assurance',
    icon: '',
    title: 'Quality Assurance Playbooks',
    subtitle: 'From inconsistent quality to systematic excellence',
    description: 'Three proven playbooks that ensure consistent deliverable quality, automate compliance management, and eliminate quality surprises through systematic QA processes.',
    color: '#48BB78', // Success Green
    foundationLevel: 'Foundation playbook: Version control, quality checklists',
    advancedLevel: 'Advanced playbook: Automated scoring, risk workflows',
    completeLevel: 'Complete playbook: AI quality prediction, improvement systems',
    idealState: 'Zero quality surprises with predictive quality management',
    href: '/services/quality-assurance',
    foundationDetails: {
      hours: '40 hours',
      weeks: '6 weeks',
      description: 'Foundation playbook delivering document version control, quality checklists, compliance tracking',
      features: [
        'Centralized document version control',
        'Standardized quality checklists and processes',
        'Compliance tracking and audit trails',
        'Quality metrics and reporting dashboards'
      ],
      impact: '70% reduction in quality issues, consistent compliance'
    },
    advancedDetails: {
      hours: '45 hours',
      weeks: '7 weeks',
      description: 'Advanced playbook delivering automated quality scoring, risk assessment workflows',
      features: [
        'Automated quality scoring and assessment',
        'Risk identification and mitigation workflows',
        'Advanced compliance monitoring and alerts',
        'Quality trend analysis and optimization'
      ],
      impact: 'Proactive quality management, zero compliance surprises'
    },
    completeDetails: {
      hours: '55 hours',
      weeks: '8 weeks',
      description: 'Complete playbook delivering AI-powered quality risk prediction, continuous improvement recommendations',
      features: [
        'AI-powered quality risk prediction',
        'Automated continuous improvement recommendations',
        'Predictive compliance management',
        'Strategic quality optimization across all projects'
      ],
      impact: 'Predictive quality excellence, competitive quality advantage'
    }
  },
  {
    id: 'business-intelligence',
    icon: '',
    title: 'Business Intelligence Playbooks',
    subtitle: 'From manual reports to automatic insights',
    description: 'Three proven playbooks that transform data into strategic insights through automated reporting, real-time dashboards, and predictive analytics.',
    color: '#4299E1', // Info Blue
    foundationLevel: 'Foundation playbook: Template reports, client dashboards',
    advancedLevel: 'Advanced playbook: Real-time dashboards, automated KPIs',
    completeLevel: 'Complete playbook: AI insights, predictive modeling',
    idealState: 'Automatic business intelligence with predictive strategic guidance',
    href: '/services/business-intelligence',
    foundationDetails: {
      hours: '45 hours',
      weeks: '6 weeks',
      description: 'Foundation playbook delivering template-driven reports, client dashboards, basic data aggregation',
      features: [
        'Standardized reporting templates and processes',
        'Client-facing dashboards and visibility',
        'Basic data aggregation and analysis',
        'Key performance indicator tracking'
      ],
      impact: '80% reduction in manual reporting time, consistent insights'
    },
    advancedDetails: {
      hours: '50 hours',
      weeks: '7 weeks',
      description: 'Advanced playbook delivering real-time performance dashboards, automated KPI tracking',
      features: [
        'Real-time performance dashboards',
        'Automated KPI tracking and alerts',
        'Advanced analytics and trend identification',
        'Strategic business intelligence reporting'
      ],
      impact: 'Real-time business visibility, proactive decision making'
    },
    completeDetails: {
      hours: '60 hours',
      weeks: '8 weeks',
      description: 'Complete playbook delivering AI-powered business insights, predictive modeling, strategic recommendations',
      features: [
        'AI-powered business insight generation',
        'Predictive modeling and forecasting',
        'Automated strategic recommendations',
        'Competitive intelligence and market analysis'
      ],
      impact: 'Predictive business intelligence, strategic competitive advantage'
    }
  },
  {
    id: 'growth-systems',
    icon: '',
    title: 'Growth Systems Playbooks',
    subtitle: 'From reactive sales to systematic growth',
    description: 'Three proven playbooks that build systematic growth capabilities through optimized lead management, automated business development, and strategic expansion systems.',
    color: '#4A9B8B', // Teal Primary
    foundationLevel: 'Foundation playbook: Lead tracking, proposal templates',
    advancedLevel: 'Advanced playbook: Lead scoring, competitive intelligence',
    completeLevel: 'Complete playbook: Predictive conversion, automated positioning',
    idealState: 'Systematic growth with predictive opportunity identification',
    href: '/services/growth-systems',
    foundationDetails: {
      hours: '40 hours',
      weeks: '6 weeks',
      description: 'Foundation playbook delivering lead tracking workflows, proposal templates, basic CRM',
      features: [
        'Systematic lead tracking and management',
        'Standardized proposal templates and processes',
        'Basic CRM implementation and optimization',
        'Pipeline management and forecasting'
      ],
      impact: '50% improvement in lead conversion, systematic sales process'
    },
    advancedDetails: {
      hours: '45 hours',
      weeks: '7 weeks',
      description: 'Advanced playbook delivering advanced lead scoring, competitive intelligence tools',
      features: [
        'Advanced lead scoring and prioritization',
        'Competitive intelligence and market analysis',
        'Automated nurturing and follow-up sequences',
        'Strategic business development optimization'
      ],
      impact: '30% increase in qualified opportunities, competitive advantage'
    },
    completeDetails: {
      hours: '55 hours',
      weeks: '8 weeks',
      description: 'Complete playbook delivering predictive conversion optimization, automated competitive positioning',
      features: [
        'AI-powered conversion optimization',
        'Automated competitive positioning and messaging',
        'Predictive opportunity identification',
        'Strategic growth acceleration systems'
      ],
      impact: 'Predictive growth optimization, systematic market expansion'
    }
  },
  {
    id: 'strategic-advantage',
    icon: '',
    title: 'Strategic Advantage Playbooks',
    subtitle: 'From operational efficiency to market differentiation',
    description: 'Three proven playbooks that create sustainable competitive advantage through operational differentiation, strategic positioning, and market leadership capabilities.',
    color: '#1E3A5F', // Navy Primary (Premium)
    foundationLevel: 'Foundation playbook: Market analysis, value assessment',
    advancedLevel: 'Advanced playbook: Unique positioning, competitive strategy',
    completeLevel: 'Complete playbook: Chief Problem Officer, predictive analysis',
    idealState: 'Market leadership through operational differentiation',
    href: '/services/strategic-advantage',
    foundationDetails: {
      hours: '50 hours',
      weeks: '7 weeks',
      description: 'Foundation playbook delivering market position analysis, value chain assessment, strategic problem identification',
      features: [
        'Comprehensive market position analysis',
        'Value chain assessment and optimization',
        'Strategic problem identification and prioritization',
        'Competitive landscape mapping and analysis'
      ],
      impact: 'Clear strategic positioning, competitive differentiation foundation'
    },
    advancedDetails: {
      hours: '55 hours',
      weeks: '8 weeks',
      description: 'Advanced playbook delivering unique value proposition development, competitive differentiation strategy',
      features: [
        'Unique value proposition development',
        'Competitive differentiation strategy creation',
        'Strategic capability development planning',
        'Market leadership positioning framework'
      ],
      impact: 'Unique market positioning, sustainable competitive advantages'
    },
    completeDetails: {
      hours: '60 hours',
      weeks: '8 weeks',
      description: 'Complete playbook delivering Chief Problem Officer methodology, predictive market analysis, bespoke advantage creation',
      features: [
        'Chief Problem Officer methodology implementation',
        'Predictive market analysis and opportunity identification',
        'Bespoke competitive advantage creation',
        'Strategic market leadership framework'
      ],
      impact: 'Market leadership capabilities, predictive competitive advantage'
    }
  }
];

export function getTrackById(id: string): Track | undefined {
  return tracks.find(track => track.id === id);
}

export function getTracksByCategory(category: 'foundation' | 'optimization' | 'excellence'): Track[] {
  switch (category) {
    case 'foundation':
      return tracks.slice(0, 3); // Multi-Party, Client, Resource
    case 'optimization':
      return tracks.slice(3, 5); // Quality, Intelligence
    case 'excellence':
      return tracks.slice(5, 7); // Growth, Strategic
    default:
      return tracks;
  }
}
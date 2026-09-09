import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hadawale Dattatray",
    title: "Data Analyst | Python Developer | MongoDB Developer",
    tagline: "Data Analyst with professional industry experience in business intelligence, SQL querying, concurrent Python automation, and executive dashboard creation in Power BI & Tableau.",
    bio: "Data Analyst with industry experience in analytics, business intelligence, and database automation. Currently working at Cloudlead Technology Pvt Ltd in Pune, with prior experience at Dasa Technology Pvt Ltd. Skilled in SQL, Power BI, Python, Tableau, and Advanced Excel for performance tracking, KPI monitoring, and customer segmentation. Demonstrated success reducing manual reporting efforts, improving stock clearance by 31%, and generating actionable commercial intelligence.",
    location: "Pune, Maharashtra, India",
    phone: "+91 9359603384",
    email: "dattahadawale9322@gmail.com",
    github: "https://github.com/dattahadawale",
    linkedin: "https://linkedin.com/in/dattahadawale",
    resumeUrl: "/resume.pdf",
    avatarUrl: "https://avatars.githubusercontent.com/u/205803686?v=4"
  },
  stats: [
    {
      label: "Current Industry Role",
      value: "Data Analyst",
      description: "Cloudlead Technology Pvt Ltd, Pune (Current)"
    },
    {
      label: "Stock Clearance Boost",
      value: "+31%",
      description: "Achieved via SQL & Excel customer segmentation"
    },
    {
      label: "Sales Growth Impact",
      value: "+22%",
      description: "Direct revenue uplift through KPI trend monitoring"
    },
    {
      label: "Academic Excellence",
      value: "8.6 / 10 CGPA",
      description: "Bachelor of Computer Engineering (SPPU Pune)"
    }
  ],
  skills: [
    {
      categoryName: "Languages & Databases",
      iconName: "Database",
      description: "Relational and NoSQL database management, advanced querying, and schema operations.",
      skills: [
        { name: "SQL & MySQL", level: "Advanced", verifiedFrom: "Resume Core Skills & Production Experience" },
        { name: "MongoDB & PyMongo", level: "Advanced", verifiedFrom: "email_placement_test CRUD & Collections" },
        { name: "Python", level: "Advanced", verifiedFrom: "Production scripts, multithreading, ML models" },
        { name: "DAX (Data Analysis Expressions)", level: "Advanced", verifiedFrom: "Power BI measures, calculated columns & aggregations" }
      ]
    },
    {
      categoryName: "Business Intelligence & Visualization",
      iconName: "BarChart3",
      description: "Industry-standard BI tools for executive reporting, performance tracking, and KPI dashboards.",
      skills: [
        { name: "Power BI", level: "Advanced", verifiedFrom: "Cloudlead & Dasa Technology, Bank Loan & Amazon Dashboards" },
        { name: "Tableau", level: "Intermediate", verifiedFrom: "Resume Technical Skills Certification" },
        { name: "Advanced Excel", level: "Advanced", verifiedFrom: "Data modeling, pivot tables, lookup & segmentation" },
        { name: "Interactive Slicers & Geospatial Maps", level: "Advanced", verifiedFrom: "Amazon & Bank-Loan dashboards" }
      ]
    },
    {
      categoryName: "Data Analysis & Business Strategy",
      iconName: "TrendingUp",
      description: "Translating complex datasets into measurable business improvements and strategy.",
      skills: [
        { name: "Customer Segmentation", level: "Advanced", verifiedFrom: "+31% stock clearance & +22% sales impact" },
        { name: "KPI Monitoring & Automation", level: "Advanced", verifiedFrom: "Revenue, cost of sales, and operational tracking" },
        { name: "Data Cleaning & Preprocessing", level: "Advanced", verifiedFrom: "Unstructured log sanitation & feature extraction" },
        { name: "Exploratory Data Analysis (EDA)", level: "Advanced", verifiedFrom: "Correlation analysis, trend forecasting, outlier detection" }
      ]
    },
    {
      categoryName: "Machine Learning & Deep Learning",
      iconName: "Cpu",
      description: "Predictive algorithms, sequential deep learning, and time-series forecasting.",
      skills: [
        { name: "TensorFlow / Keras", level: "Advanced", verifiedFrom: "4-layer stacked LSTM sequential architecture" },
        { name: "LSTM Neural Networks", level: "Advanced", verifiedFrom: "Stock price time-series prediction" },
        { name: "XGBoost & Random Forest", level: "Intermediate", verifiedFrom: "Comparative multi-model regression benchmarking" },
        { name: "Scikit-Learn & Metrics", level: "Advanced", verifiedFrom: "MinMaxScaler, MSE, MAE, R², MAPE" }
      ]
    },
    {
      categoryName: "Backend, Networking & Automation",
      iconName: "Network",
      description: "Concurrent systems, protocol automation, and cloud/local integrations.",
      skills: [
        { name: "Multithreading & Concurrency", level: "Advanced", verifiedFrom: "concurrent.futures ThreadPoolExecutor (8-12 workers)" },
        { name: "IMAP4_SSL Protocol Automation", level: "Advanced", verifiedFrom: "Automated mailbox auditing & RFC822 header parsing" },
        { name: "Streamlit UI Applications", level: "Advanced", verifiedFrom: "Interactive operations dashboards & web apps" },
        { name: "Automated PDF Reporting", level: "Intermediate", verifiedFrom: "FPDF automated report dispatch" }
      ]
    },
    {
      categoryName: "Developer Tools & Environment",
      iconName: "Wrench",
      description: "Version control, developer environments, and analytical toolchains.",
      skills: [
        { name: "Git & GitHub", level: "Advanced", verifiedFrom: "Repository management & version control" },
        { name: "Jupyter Notebook", level: "Advanced", verifiedFrom: "Exploratory modeling & iterative data analysis" },
        { name: "VS Code", level: "Advanced", verifiedFrom: "Primary coding and script debugging environment" },
        { name: "python-dotenv", level: "Advanced", verifiedFrom: "Secure credential and environment isolation" }
      ]
    }
  ],
  projects: [
    {
      id: "bank-loan-analysis",
      title: "Bank-Loan Analysis & Financial Risk Dashboard",
      category: "data-analysis",
      badge: "Financial Analytics",
      period: "Nov 2024 - Dec 2024",
      tagline: "Comprehensive SQL & Power BI loan performance platform evaluating $435.8M in received loan payments and 38.6K applications.",
      oneLiner: "Engineered a financial risk assessment dashboard categorizing loan health (Good vs Bad Loans), tracking debt-to-income metrics, and identifying credit exposure.",
      problem: "Financial institutions face significant capital risk without granular real-time visibility into loan status distributions, default rates, and interest rate sensitivity across thousands of borrowers.",
      solution: "Developed an interactive Power BI and SQL analytical system segmenting 38.6K loan applications into Good Loans (86.2%) and Bad Loans (13.8%), analyzing $370.2M in funded capital and measuring portfolio DTI (13.3%).",
      technologies: ["SQL", "Power BI", "DAX", "Financial Modeling", "Risk Analysis", "Advanced Excel"],
      keyFeatures: [
        "Loan Performance Classification: 86.2% of total loan applications categorized as 'Good Loans', contributing to $370.2M in funded amounts and $435.8M in received amounts.",
        "Default Rate & Risk Assessment: Isolated 13.8% of loans categorized as 'Bad Loans' with $65.5M funded, identifying targeted areas for underwriting improvements.",
        "Core Metric Tracking: Real-time monitoring of 38.6K Total Applications, 12% Average Interest Rate, and 13.3% Average Debt-to-Income (DTI) Ratio.",
        "Granular Status Reporting: Visual breakdown across 'Current', 'Charged Off', and 'Fully Paid' statuses for strategic balance-sheet optimization."
      ],
      contribution: "Authored complex SQL queries to aggregate multi-tier loan repayment data, structured relational tables in Power BI, and authored DAX measures for DTI and funding ratios.",
      results: [
        "Audited 38.6K applications, validating $435.8M in total received repayments.",
        "Provided executive risk visibility isolating $65.5M in bad debt exposure.",
        "Enabled underwriters to identify higher-risk DTI clusters above 13.3%."
      ],
      metrics: [
        { label: "Received Amount", value: "$435.8M", detail: "Total loan repayments received" },
        { label: "Total Applications", value: "38.6K", detail: "Borrower records analyzed" },
        { label: "Good Loan Ratio", value: "86.2%", detail: "$370.2M funded capital" },
        { label: "Bad Loan Exposure", value: "$65.5M", detail: "13.8% default risk segment" }
      ],
      architecture: {
        pipeline: [
          "Loan Transaction Ingestion & SQL Query Transformation",
          "Credit Health Categorization (Good Loans vs Bad Loans)",
          "DAX Measure Calculation (DTI Ratio, Average Interest, Repayment Delta)",
          "Power BI Dashboard Deployment with Multi-Tier Status Slicers"
        ],
        details: "Queries loan ledgers in SQL to categorize loan states. Powers Power BI visuals tracking repayment velocity and risk metrics across borrower demographics."
      },
      challenges: [
        "Reconciling multi-status loan lifecycles ('Charged Off', 'Current', 'Fully Paid') into clean risk classification buckets.",
        "Designing DAX measures that accurately reflect weighted average interest rates and DTI ratios across filtered applicant pools."
      ],
      githubUrl: "https://github.com/dattahadawale",
      highlights: [
        "Verified resume project with quantifiable financial impact ($435.8M analyzed)",
        "Directly applicable to banking, fintech, risk management, and credit analytics roles"
      ]
    },
    {
      id: "amazon-data-analysis-dashboard",
      title: "Amazon E-Commerce BI & Revenue Analytics Dashboard",
      category: "data-analysis",
      badge: "Flagship BI Project",
      tagline: "Executive Power BI dashboard analyzing ₹6.30M in commercial transactions and 5,000 product catalog records.",
      oneLiner: "Transformed raw multi-channel e-commerce transaction logs into an executive Power BI decision dashboard with state-level geospatial mapping and category profitability insights.",
      problem: "E-commerce retailers often struggle to identify product category profitability, customer payment bottlenecks, and geographical demand patterns across high-volume transaction catalogs containing thousands of unstandardized records.",
      solution: "Engineered an end-to-end data pipeline cleaning unstructured transaction records, calculating derived metrics (Month, Total Sales, AOV, State geography), and designing an interactive Power BI dashboard equipped with multi-attribute slicers, geospatial heatmaps, and categorical revenue distribution charts.",
      technologies: ["Power BI", "DAX", "Data Modeling", "Excel Advanced", "Data Cleaning", "Geospatial Analysis", "EDA"],
      keyFeatures: [
        "Executive KPI Ribbon tracking Total Sales (₹6.30M overall / ₹3.24M filtered), Average Order Value (₹1,259.80), and Product Count (5,000).",
        "Multi-Dimensional Interactive Slicers filtering by Month (Jan-Dec), Product Category, Payment Method, Region, and State.",
        "Categorical Distribution Analysis uncovering Home goods as 52% of total volume, Sports at 31%, Toys at 16%, and Electronics at 1%.",
        "Payment Channel Breakdown highlighting Cash on Delivery (₹1.10M) and Credit Cards (₹1.07M) as dominant payment vectors.",
        "Geospatial Regional Performance Mapping highlighting North region leadership (₹633,892) and state-level concentration."
      ],
      contribution: "Authored the complete 18-slide Amazon Business Intelligence Report, performed systematic data sanitation from 'Amazon Unclean Data.xlsx' to 'amazon clean data.xlsx', modeled custom DAX calculations, and constructed the interactive visual dashboard.",
      results: [
        "Identified top sales momentum quarters with January, February, and August reaching peak revenue of ~₹0.6M each.",
        "Isolated 'product_111' as the top-selling catalog item across all categories.",
        "Mapped payment channel breakdown proving COD (₹1.10M) and Credit Cards (₹1.07M) generate over 34% of aggregate platform revenue."
      ],
      metrics: [
        { label: "Overall Sales Analyzed", value: "₹6.30M", detail: "Verified from dashboard summary card" },
        { label: "Products Cataloged", value: "5,000", detail: "Unique catalog SKUs processed" },
        { label: "Average Order Value", value: "₹1,259.80", detail: "Computed across all transaction batches" },
        { label: "Top Category Share", value: "52%", detail: "Home category market dominance" }
      ],
      architecture: {
        pipeline: [
          "Raw Ingestion (Order_ID, Customer_ID, Price, Discount)",
          "Data Cleaning & Feature Engineering (Extract Month, Calculate Net Sales, Fill Unknowns)",
          "Data Modeling & Aggregation (Categorical Grouping & Geospatial Mapping)",
          "Power BI Dashboard Deployment (Interactive Slicers, KPI Cards, Visual Reporting)"
        ],
        details: "Transformed unstructured Excel sheets into normalized analytical tables. Derived net sales fields factoring in unit price and discount percentages, mapped states to standard Indian geographic entities, and built responsive visual components."
      },
      challenges: [
        "Handling missing categories and payment methods by introducing structured 'Unknown' fallbacks without skewing mean KPIs.",
        "Normalizing regional and state data to enable accurate Bing Maps geospatial rendering in Power BI.",
        "Designing dynamic DAX measures that maintain consistency when multiple slicers are simultaneously filtered."
      ],
      githubUrl: "https://github.com/dattahadawale/amazon-data-analysis-dashboard",
      dashboardImage: "/amazon_dashboard.png",
      highlights: [
        "Verified artifacts: 'Amazon Business Intelligence Report.pptx' (18 slides) and 'final dashboard.png'",
        "Real e-commerce dataset with 5,000 transactions and complete cleaning documentation",
        "Directly applicable to commercial retail, supply chain, and revenue analytics roles"
      ]
    },
    {
      id: "marketing-performance-analysis",
      title: "Marketing Performance & Campaign ROI Analysis",
      category: "data-analysis",
      badge: "Campaign Analytics",
      period: "Jan 2025 - Feb 2025",
      tagline: "Power BI performance dashboard tracking 8+ marketing KPIs, ₹1M+ in revenue, and 570K+ digital impressions.",
      oneLiner: "Optimized marketing spend of ₹0.26M through revenue vs. spend analysis across 4+ digital acquisition channels.",
      problem: "Marketing teams frequently overspend on under-performing advertising channels due to lack of consolidated cross-channel ROI reporting.",
      solution: "Engineered a Power BI dashboard monitoring 8+ marketing KPIs, aggregating 570K+ impressions and ₹1M+ in generated revenue to optimize campaign budgets across 4+ marketing channels.",
      technologies: ["Power BI", "DAX", "SQL", "Excel", "Marketing Analytics", "ROI Optimization"],
      keyFeatures: [
        "Multi-Channel Attribution: Analyzed campaign efficiency across 4+ channels, isolating top-performing conversion sources.",
        "KPI Dashboard: Monitored 8+ vital growth metrics including impressions, CTR, conversion rate, and revenue per spend.",
        "Budget Efficiency Optimization: Audited ₹0.26M in marketing spend to enhance channel allocation and ROI.",
        "Revenue Scaling: Tracked ₹1M+ in verified sales generated from optimized campaign cohorts."
      ],
      contribution: "Designed the Power BI data model, cleaned raw campaign telemetry from multiple platforms, and created automated spend vs. revenue efficiency charts.",
      results: [
        "Consolidated 570K+ impressions into unified acquisition funnels.",
        "Optimized ₹0.26M in advertising spend, boosting overall campaign ROI.",
        "Tracked ₹1M+ in commercial revenue attributed to top acquisition sources."
      ],
      metrics: [
        { label: "Revenue Tracked", value: "₹1M+", detail: "Attributed campaign revenue" },
        { label: "Digital Impressions", value: "570K+", detail: "Ad impression volume analyzed" },
        { label: "Channels Evaluated", value: "4+ Channels", detail: "Cross-platform performance" },
        { label: "Spend Optimized", value: "₹0.26M", detail: "Ad expenditure audited" }
      ],
      architecture: {
        pipeline: [
          "Cross-Platform Ad Campaign Data Extraction",
          "Data Normalization & Cleaning in Excel & SQL",
          "DAX Calculation for ROAS, Cost Per Acquisition, and Conversion Ratios",
          "Executive Power BI Visual Presentation"
        ],
        details: "Unified disparate ad spend metrics into normalized cost-per-lead and return-on-ad-spend dashboards."
      },
      challenges: [
        "Standardizing differing attribution windows across marketing channels.",
        "Building dynamic budget reallocation models based on real-time ROAS metrics."
      ],
      githubUrl: "https://github.com/dattahadawale",
      highlights: [
        "Verified resume project showcasing performance marketing and commercial budget optimization",
        "Direct relevance to e-commerce, digital marketing, and growth analytics teams"
      ]
    },
    {
      id: "email_placement_test",
      title: "High-Concurrency Inbox Placement & Deliverability Audit Engine",
      category: "python-backend",
      badge: "Backend & MongoDB",
      tagline: "Automated multi-worker IMAP auditing engine powered by Python, Streamlit, and MongoDB for real-time email deliverability verification.",
      oneLiner: "Engineered an automated deliverability diagnostic system using multi-threaded IMAP SSL connections and MongoDB persistence to audit sender reputation across mailboxes.",
      problem: "Marketing operations and cold outreach systems frequently suffer silent deliverability failures where emails are routed to Spam folders, with zero visibility into domain placement or seed mailbox health.",
      solution: "Developed an asynchronous-like concurrent testing suite in Python utilizing ThreadPoolExecutor (up to 8 parallel workers) to query Gmail and Google Workspace seed mailboxes via IMAP SSL, parse RFC822 headers and internal date stamps, classify deliverability (Inbox, Spam, Mixed, Not Received), and persist audit runs in MongoDB.",
      technologies: ["Python", "MongoDB", "PyMongo", "Streamlit", "imaplib", "Multithreading", "Pandas", "python-dotenv"],
      keyFeatures: [
        "Multi-Worker Parallelism: Concurrently tests seed mailboxes using concurrent.futures.ThreadPoolExecutor with configurable worker threads (1-12).",
        "MongoDB Enterprise Persistence: Manages database collections ('accounts', 'domains', 'placement_results') in the 'inbox_test' MongoDB instance.",
        "RFC822 Header & MIME Parsing: Inspects message headers and extracts sender domains with regex matching against RFC standards.",
        "Timezone-Aware Timestamp Filtering: Parses IMAP INTERNALDATE strings and verifies messages against configurable lookback windows (1-48 hours).",
        "Real-Time Streamlit Operations UI: Full CRUD management for seed mailboxes and target domains with live progress spinners and metric cards."
      ],
      contribution: "Designed and implemented the core multi-threaded scanning engine ('email_checker.py'), integrated the PyMongo database layer with secure credential loading, and built the responsive Streamlit operations dashboard ('app.py').",
      results: [
        "Achieved 10x scanning speed improvement by constraining IMAP queries to the last 15 matching message IDs per domain.",
        "Automated placement classification per sender domain calculating instant Inbox % and Spam % rates.",
        "Persistent historical audit logging into MongoDB for longitudinal deliverability trend tracking."
      ],
      metrics: [
        { label: "Concurrency Scale", value: "8 Workers", detail: "Configurable parallel IMAP connections" },
        { label: "Database Engine", value: "MongoDB", detail: "3 dedicated collections for audit runs" },
        { label: "Lookback Flexibility", value: "1-48 Hours", detail: "Timezone-aware date cutoff filters" },
        { label: "Supported Platforms", value: "Gmail / G-Suite", detail: "SSL port 993 automated authentication" }
      ],
      architecture: {
        pipeline: [
          "Seed Mailbox & Target Domain Configuration via Streamlit UI",
          "Credential & Config Retrieval from MongoDB Database ('inbox_test')",
          "Multi-Threaded IMAP Connection Pooling (ThreadPoolExecutor)",
          "RFC822 Header Fetching & INTERNALDATE Cutoff Verification",
          "Deliverability Classification (Inbox, Spam, Mixed, Not Received)",
          "Aggregated Summary Presentation & MongoDB Audit Document Insert"
        ],
        details: "Combines IMAP4_SSL network sockets with worker thread pools. Evaluates folder placement across INBOX and [Gmail]/Spam, calculates domain-level deliverability metrics, and stores structured time-stamped JSON documents in MongoDB."
      },
      challenges: [
        "Overcoming IMAP latency across multiple mailboxes by implementing a multi-threaded pool and caching the latest 15 message headers.",
        "Handling diverse timestamp formats across international email servers with timezone-aware datetime parsing.",
        "Managing sensitive app passwords securely using python-dotenv and MongoDB document masking."
      ],
      githubUrl: "https://github.com/dattahadawale/email_placement_test",
      highlights: [
        "Verified repository code: 'app.py' (262 lines) and 'email_checker.py' (174 lines)",
        "Direct integration with PyMongo driver for automated NoSQL document storage",
        "High practical utility for email marketing, sales ops, and backend automation"
      ]
    },
    {
      id: "stock-market-prediction-lstm",
      title: "AI Stock Market Prediction & Multi-Model Forecasting Platform",
      category: "machine-learning",
      badge: "Deep Learning & ML",
      tagline: "End-to-end financial intelligence platform combining 4-layer stacked LSTM neural networks, XGBoost, Random Forest, and technical analysis.",
      oneLiner: "Architected a full-cycle time-series forecasting engine featuring a 4-layer Keras LSTM neural network, technical indicators (RSI, MACD), sentiment analysis, and automated PDF reporting.",
      problem: "Financial market data is notoriously non-linear, noisy, and volatile. Relying on single-metric models often fails to capture long-term temporal dependencies or combine quantitative technical signals with macro sentiment.",
      solution: "Created an integrated forecasting platform that trains and evaluates a 4-layer stacked LSTM neural network with Dropout regularization alongside XGBoost, Random Forest, and Linear Regression models. Enriched predictions with technical indicators (RSI, MACD, MA50, MA100, MA200), financial news sentiment via TextBlob, and automated PDF research reports.",
      technologies: ["Python", "TensorFlow", "Keras", "LSTM", "XGBoost", "Scikit-Learn", "Streamlit", "Plotly", "yfinance", "ta", "FPDF"],
      keyFeatures: [
        "Deep Sequential LSTM Architecture: 4 stacked LSTM layers (50 -> 60 -> 80 -> 120 units) with progressive Dropout (0.2 to 0.5) to combat overfitting.",
        "Multi-Model Regression Suite: Side-by-side performance benchmarking of LSTM, XGBoost Regressor, Random Forest, and Linear Regression.",
        "Comprehensive Quantitative Evaluation: Computes MSE, MAE, R² Score, and MAPE across historical testing horizons.",
        "Interactive Financial Visualizations: Plotly candlestick charts, 100-day & 200-day moving averages, and predicted vs. actual price overlays.",
        "Automated PDF Report Generation: Exports one-click executive summaries with FPDF detailing price targets and technical signals."
      ],
      contribution: "Designed and trained the deep learning LSTM model in Jupyter Notebook ('Stock_Market_Prediction_Model_Creation.ipynb'), built the 47KB interactive Streamlit web application ('app.py'), and integrated automated yfinance data pipelines with error recovery.",
      results: [
        "Trained 4-layer LSTM over 50 epochs with batch size 128, achieving smooth convergence on scaled price data.",
        "Engineered reliable financial data caching using Streamlit @st.cache_data and exponential retry logic.",
        "Integrated NLP sentiment scoring with quantitative indicators for holistic stock analysis."
      ],
      metrics: [
        { label: "Deep Learning Stack", value: "4 Layers", detail: "Stacked LSTM with progressive dropout" },
        { label: "Training Epochs", value: "50 Epochs", detail: "Optimized with Adam optimizer & MSE loss" },
        { label: "Technical Indicators", value: "5+ Signals", detail: "RSI, MACD, MA50, MA100, MA200" },
        { label: "Ensemble Models", value: "4 Regressors", detail: "LSTM, XGBoost, Random Forest, Linear" }
      ],
      architecture: {
        pipeline: [
          "Historical Market Data Ingestion via yfinance API",
          "Data Normalization using Scikit-Learn MinMaxScaler (0, 1)",
          "Temporal Feature Sliding Window (x_train, y_train sequence generation)",
          "4-Layer Sequential LSTM Neural Network Inference (Keras / TensorFlow)",
          "Multi-Model Benchmarking (XGBoost, Random Forest, Linear Regression)",
          "Interactive Plotly Rendering & Automated FPDF Export"
        ],
        details: "Applies MinMax scaling to historical adjusted close prices, formats 60-day lookback sequences, and executes forward passes through 4 stacked LSTM layers. Compares predictions with traditional ML regressors and overlays moving average crossover signals."
      },
      challenges: [
        "Preventing neural network overfitting on noisy financial time series through incremental Dropout regularization (0.2, 0.3, 0.4, 0.5).",
        "Handling yfinance rate-limiting and missing trading days using custom retry wrappers and column standardization.",
        "Synchronizing multiple visualization engines (Plotly, Matplotlib) within a performant Streamlit session."
      ],
      githubUrl: "https://github.com/dattahadawale/Hadawale-Dattatray-",
      highlights: [
        "Verified Jupyter Notebook: 38 cells with complete TensorFlow / Keras training code",
        "Verified production scripts: 'app.py' (47KB) and 'appv2.1.3.py' (26KB)",
        "Combines Deep Learning, Quantitative Finance, and Automated PDF Reporting"
      ]
    }
  ],
  experience: [
    {
      role: "Data Analyst",
      organization: "Cloudlead Technology Pvt Ltd",
      period: "August 2026 – Present",
      location: "Pune, India",
      isCurrent: true,
      description: "Driving data intelligence and performance reporting operations. Building scalable analytical pipelines and automated dashboards to support commercial growth.",
      achievements: [
        "Spearheading business data analytics and KPI monitoring pipelines to track operational efficiency and revenue metrics.",
        "Developing automated reporting workflows using SQL and Python to minimize manual data processing turnaround times.",
        "Collaborating with cross-functional leadership to deliver actionable insights that influence strategic business planning.",
        "Managing data integrity and ETL pipelines across customer acquisition and operational databases."
      ],
      technologies: ["SQL", "Power BI", "Python", "Advanced Excel", "Data Analytics", "KPI Monitoring"]
    },
    {
      role: "Data Analyst",
      organization: "Dasa Technology Pvt Ltd",
      period: "February 2026 – August 2026",
      location: "Pune, India",
      isCurrent: false,
      description: "Delivered business intelligence dashboards, KPI monitoring, and customer segmentation to drive revenue and inventory improvements.",
      achievements: [
        "Developed and automated performance dashboards in Power BI, significantly reducing manual reporting efforts.",
        "Monitored and analyzed company-wide KPIs including revenue, cost of sales, and operational expenses.",
        "Performed customer segmentation using SQL and Excel, improving stock clearance by 31% and sales by 22%.",
        "Supported executive business decision-making through rigorous trend analysis and actionable commercial insights."
      ],
      technologies: ["Power BI", "SQL", "DAX", "Advanced Excel", "Customer Segmentation", "Trend Analysis"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Engineering",
      field: "Computer Engineering",
      institution: "Savitribai Phule Pune University",
      location: "Pune, Maharashtra",
      period: "November 2022 – July 2026",
      cgpa: "8.6 / 10",
      details: [
        "Academic standing: 8.6 / 10 CGPA throughout engineering degree.",
        "Strong foundation in data structures, algorithms, relational database management, and computational systems.",
        "Specialized coursework in data analytics, Python software engineering, and business intelligence."
      ]
    }
  ],
  certifications: [
    {
      title: "Data Analytics Certification",
      issuer: "D Tech-Point",
      period: "February 2025 – August 2026",
      details: [
        "Comprehensive training in SQL querying, Power BI dashboard architecture, Advanced Excel, and business reporting.",
        "Hands-on project work in KPI analysis, data cleaning, and commercial decision support."
      ]
    }
  ],
  recruiterNotes: {
    heading: "15-Second Recruiter Summary",
    points: [
      "Currently employed as Data Analyst at Cloudlead Technology Pvt Ltd in Pune.",
      "Proven track record at Dasa Technology Pvt Ltd: improved stock clearance by 31% and boosted sales by 22%.",
      "High academic achievement: Bachelor of Computer Engineering from SPPU Pune with 8.6/10 CGPA.",
      "Certified in Data Analytics from D Tech-Point with hands-on proficiency in Power BI, SQL, Python & MongoDB.",
      "Portfolio features multi-million dollar financial analytics ($435.8M loan project) and commercial BI (₹6.30M Amazon report)."
    ]
  }
};

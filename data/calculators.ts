import { CalculatorMeta, Category } from '@/types/calculator';

export const categories: Category[] = [
  { name: 'Finance', slug: 'finance', description: 'Personal finance calculators for loans, savings, and salary planning', icon: 'Landmark' },
  { name: 'Investing', slug: 'investing', description: 'Investment calculators for returns, stock analysis, and portfolio planning', icon: 'TrendingUp' },
  { name: 'Business', slug: 'business', description: 'Business calculators for margins, break-even analysis, and profitability', icon: 'Briefcase' },
  { name: 'Creator Economy', slug: 'creator-economy', description: 'Calculators for content creators, YouTubers, and freelancers', icon: 'PlayCircle' },
  { name: 'Supply Chain', slug: 'supply-chain', description: 'Supply chain calculators for inventory management and safety stock', icon: 'Package' },
];

export const calculators: CalculatorMeta[] = [
  {
    name: 'EMI Calculator',
    slug: 'emi-calculator',
    description: 'Calculate your Equated Monthly Installment for home loans, car loans, and personal loans. See the breakdown of principal and interest payments over the loan tenure.',
    category: 'finance',
    icon: 'Home',
    formula: 'EMI = [P \u00D7 R \u00D7 (1+R)^N] / [(1+R)^N - 1]\nWhere P = Principal loan amount, R = Monthly interest rate, N = Number of monthly installments',
    example: 'For a loan of \u20B910,00,000 at 8.5% annual interest for 20 years:\nP = 10,00,000, R = 8.5/12/100 = 0.00708, N = 240\nEMI = [10,00,000 \u00D7 0.00708 \u00D7 (1.00708)^240] / [(1.00708)^240 - 1] = \u20B98,694',
    faqs: [
      { question: 'What is EMI?', answer: 'EMI stands for Equated Monthly Installment. It is the fixed monthly payment made to repay a loan within a specified tenure, consisting of both principal and interest components.' },
      { question: 'Does prepayment reduce my EMI?', answer: 'Prepayment reduces the outstanding principal, which can either reduce your EMI amount or shorten the loan tenure, depending on your lender\'s terms.' },
      { question: 'How does interest rate affect EMI?', answer: 'A higher interest rate increases your EMI since more of each payment goes toward interest. Even a small rate change can significantly impact total payment over long tenures.' },
      { question: 'Can I change my EMI during the loan tenure?', answer: 'EMI is typically fixed for the loan tenure, but you can restructure it by refinancing the loan or making part-prepayments to adjust the tenure or EMI amount.' },
    ],
    relatedSlugs: ['savings-goal-calculator', 'roi-calculator'],
  },
  {
    name: 'Savings Goal Calculator',
    slug: 'savings-goal-calculator',
    description: 'Plan your savings to reach your financial goals. Calculate how much you need to save monthly or how long it will take to reach your target with compound interest.',
    category: 'finance',
    icon: 'PiggyBank',
    formula: 'Monthly Savings = [FV \u00D7 r] / [(1 + r)^n - 1]\nWhere FV = Future Value (goal amount), r = Monthly interest rate, n = Number of months',
    example: 'To save \u20B95,00,000 in 5 years at 6% annual interest:\nFV = 5,00,000, r = 6/12/100 = 0.005, n = 60\nMonthly Savings = [5,00,000 \u00D7 0.005] / [(1.005)^60 - 1] = \u20B97,166',
    faqs: [
      { question: 'How does compound interest help my savings?', answer: 'Compound interest means you earn interest on both your principal and previously earned interest. Over time, this creates an exponential growth effect that significantly boosts your savings.' },
      { question: 'What if I miss a monthly deposit?', answer: 'Missing deposits will extend the time needed to reach your goal. You can compensate by increasing future deposits or adjusting your target date.' },
      { question: 'What interest rate should I use?', answer: 'Use a realistic rate based on your savings vehicle. High-yield savings accounts offer 4-5%, fixed deposits 5-7%, and market investments may average 8-12% historically.' },
    ],
    relatedSlugs: ['emi-calculator', 'roi-calculator'],
  },
  {
    name: 'Salary Calculator',
    slug: 'salary-calculator',
    description: 'Convert between hourly, daily, weekly, monthly, and annual salary. Understand your take-home pay after taxes and deductions with a detailed breakdown.',
    category: 'finance',
    icon: 'Wallet',
    formula: 'Annual Salary = Hourly Rate \u00D7 Hours per Week \u00D7 Weeks per Year\nMonthly Salary = Annual Salary / 12\nWeekly Salary = Annual Salary / 52',
    example: 'For an hourly rate of $25 working 40 hours/week, 52 weeks/year:\nAnnual = $25 \u00D7 40 \u00D7 52 = $52,000\nMonthly = $52,000 / 12 = $4,333.33',
    faqs: [
      { question: 'How do I calculate my hourly rate from annual salary?', answer: 'Divide your annual salary by the total working hours in a year. For a standard 40-hour work week: Annual Salary / (40 \u00D7 52) = Hourly Rate.' },
      { question: 'Does this account for taxes?', answer: 'The basic calculation shows gross salary. For net take-home pay, you need to subtract federal, state, and local taxes, plus any deductions like health insurance or retirement contributions.' },
      { question: 'What about overtime pay?', answer: 'Overtime is typically paid at 1.5x your regular hourly rate (time-and-a-half). Some employers offer double-time for holidays. This is calculated separately from base salary.' },
    ],
    relatedSlugs: ['profit-margin-calculator', 'break-even-calculator'],
  },
  {
    name: 'ROI Calculator',
    slug: 'roi-calculator',
    description: 'Calculate Return on Investment to measure the profitability of your investments. Compare different investment opportunities with annualized returns.',
    category: 'investing',
    icon: 'TrendingUp',
    formula: 'ROI = [(Final Value - Initial Investment) / Initial Investment] \u00D7 100\nAnnualized ROI = [(1 + ROI)^(1/Years) - 1] \u00D7 100',
    example: 'Investment of $10,000 grows to $15,000 in 3 years:\nROI = [($15,000 - $10,000) / $10,000] \u00D7 100 = 50%\nAnnualized ROI = [(1.5)^(1/3) - 1] \u00D7 100 = 14.47%',
    faqs: [
      { question: 'What is a good ROI?', answer: 'A good ROI depends on the investment type and risk. Stock market averages 7-10% annually. Real estate may yield 8-12%. Bonds typically return 3-5%. Higher potential returns usually carry higher risk.' },
      { question: 'What is the difference between ROI and annualized ROI?', answer: 'ROI shows total return over the entire period, while annualized ROI normalizes that return to a yearly rate, making it easier to compare investments held for different durations.' },
      { question: 'Does ROI account for inflation?', answer: 'Basic ROI does not account for inflation. Real ROI = Nominal ROI - Inflation Rate. For example, if your ROI is 8% and inflation is 3%, your real ROI is approximately 5%.' },
    ],
    relatedSlugs: ['stock-average-calculator', 'savings-goal-calculator'],
  },
  {
    name: 'Stock Average Calculator',
    slug: 'stock-average-calculator',
    description: 'Calculate the average cost of your stock purchases when buying at different price points. Essential for dollar-cost averaging and portfolio tracking.',
    category: 'investing',
    icon: 'BarChart3',
    formula: 'Average Price = Total Cost / Total Shares\nTotal Cost = \u2211(Price per Share \u00D7 Number of Shares)',
    example: 'Bought 100 shares at $50, then 150 shares at $45, then 200 shares at $55:\nTotal Cost = (100\u00D750) + (150\u00D745) + (200\u00D755) = $5,000 + $6,750 + $11,000 = $22,750\nTotal Shares = 450\nAverage Price = $22,750 / 450 = $50.56',
    faqs: [
      { question: 'What is dollar-cost averaging?', answer: 'DCA is an investment strategy where you invest a fixed amount regularly regardless of price. This naturally buys more shares when prices are low and fewer when high, resulting in a favorable average cost.' },
      { question: 'Why is average cost important?', answer: 'Your average cost determines your break-even point and profit/loss. You profit when the current price exceeds your average cost. It helps decide whether to buy more or wait.' },
      { question: 'Should I average down on a losing stock?', answer: 'Averaging down reduces your cost basis but increases your exposure to that stock. It can be beneficial if the stock\'s fundamentals remain strong, but risky if the decline reflects real problems.' },
    ],
    relatedSlugs: ['roi-calculator', 'profit-margin-calculator'],
  },
  {
    name: 'Profit Margin Calculator',
    slug: 'profit-margin-calculator',
    description: 'Calculate gross, operating, and net profit margins for your business. Understand profitability ratios to make better pricing and cost decisions.',
    category: 'business',
    icon: 'Percent',
    formula: 'Gross Margin = [(Revenue - COGS) / Revenue] \u00D7 100\nOperating Margin = [(Revenue - COGS - Operating Expenses) / Revenue] \u00D7 100\nNet Margin = [Net Profit / Revenue] \u00D7 100',
    example: 'Revenue: $100,000, COGS: $40,000, Operating Expenses: $25,000, Tax & Interest: $5,000\nGross Margin = [($100,000 - $40,000) / $100,000] \u00D7 100 = 60%\nNet Margin = [($100,000 - $40,000 - $25,000 - $5,000) / $100,000] \u00D7 100 = 30%',
    faqs: [
      { question: 'What is a good profit margin?', answer: 'It varies by industry. Software companies may see 60-80% gross margins, retail 20-40%, and restaurants 3-5%. Compare against industry benchmarks rather than absolute numbers.' },
      { question: 'Gross margin vs. net margin?', answer: 'Gross margin accounts only for direct production costs (COGS). Net margin includes ALL expenses: operating costs, taxes, interest, and depreciation. Net margin is the true bottom-line measure.' },
      { question: 'How can I improve my profit margin?', answer: 'Increase prices strategically, reduce COGS through better supplier deals, cut unnecessary operating expenses, improve operational efficiency, and focus on higher-margin products or services.' },
    ],
    relatedSlugs: ['break-even-calculator', 'salary-calculator'],
  },
  {
    name: 'Break-even Calculator',
    slug: 'break-even-calculator',
    description: 'Find out how many units you need to sell to cover your costs. Calculate break-even point in units and revenue to make informed business decisions.',
    category: 'business',
    icon: 'Target',
    formula: 'Break-even Units = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)\nBreak-even Revenue = Fixed Costs / [(Selling Price - Variable Cost) / Selling Price]',
    example: 'Fixed Costs: $50,000/month, Selling Price: $100/unit, Variable Cost: $40/unit\nBreak-even Units = $50,000 / ($100 - $40) = 834 units\nBreak-even Revenue = 834 \u00D7 $100 = $83,400',
    faqs: [
      { question: 'What is a break-even point?', answer: 'The break-even point is where total revenue equals total costs. Below this point you operate at a loss; above it you generate profit. It\'s critical for pricing and production decisions.' },
      { question: 'Fixed vs. variable costs?', answer: 'Fixed costs remain constant regardless of production volume (rent, salaries, insurance). Variable costs change directly with production (materials, shipping, commissions per unit).' },
      { question: 'How does price change affect break-even?', answer: 'Increasing price reduces the break-even point (fewer units needed). However, higher prices may reduce demand. The optimal price balances margin with volume for maximum profit.' },
    ],
    relatedSlugs: ['profit-margin-calculator', 'roi-calculator'],
  },
  {
    name: 'YouTube Earnings Calculator',
    slug: 'youtube-earnings-calculator',
    description: 'Estimate your YouTube channel earnings based on views, CPM, and engagement. Plan your content strategy with realistic revenue projections.',
    category: 'creator-economy',
    icon: 'Youtube',
    formula: 'Estimated Earnings = (Views / 1000) \u00D7 CPM\nMonthly Earnings = Daily Earnings \u00D7 30\nAnnual Earnings = Daily Earnings \u00D7 365',
    example: 'Channel with 50,000 daily views and $5 CPM:\nDaily Earnings = (50,000 / 1000) \u00D7 $5 = $250\nMonthly Earnings = $250 \u00D7 30 = $7,500\nAnnual Earnings = $250 \u00D7 365 = $91,250',
    faqs: [
      { question: 'What is CPM?', answer: 'CPM (Cost Per Mille) is what advertisers pay per 1,000 ad impressions. YouTube keeps 45% and creators receive 55%. CPM varies widely: $0.25-$4 for most niches, $10-$30+ for finance/tech.' },
      { question: 'Why are my actual earnings different?', answer: 'Actual earnings depend on ad engagement, viewer demographics, ad blockers, watch time, video length (mid-roll ads require 8+ min), and YouTube\'s 45% revenue share.' },
      { question: 'How can I increase my YouTube CPM?', answer: 'Target high-CPM niches (finance, tech, business), create longer videos for mid-roll ads, attract viewers from high-CPM countries (US, UK, Canada, Australia), and focus on audience retention.' },
    ],
    relatedSlugs: ['profit-margin-calculator', 'salary-calculator'],
  },
  {
    name: 'Inventory Forecast Calculator',
    slug: 'inventory-forecast-calculator',
    description: 'Forecast your inventory needs based on historical demand patterns. Optimize stock levels to prevent stockouts while minimizing holding costs.',
    category: 'supply-chain',
    icon: 'PackageSearch',
    formula: 'Forecasted Demand = Average Daily Demand \u00D7 Forecast Period\nReorder Point = (Average Daily Demand \u00D7 Lead Time) + Safety Stock\nTotal Inventory Needed = Forecasted Demand + Safety Stock',
    example: 'Average daily demand: 50 units, Lead time: 7 days, Safety stock: 100 units, Forecast period: 30 days\nForecasted Demand = 50 \u00D7 30 = 1,500 units\nReorder Point = (50 \u00D7 7) + 100 = 450 units',
    faqs: [
      { question: 'What is inventory forecasting?', answer: 'Inventory forecasting predicts future demand based on historical data, trends, and seasonality. It helps businesses maintain optimal stock levels to meet customer demand without over-investing in inventory.' },
      { question: 'What is lead time?', answer: 'Lead time is the duration between placing an order with a supplier and receiving it. Longer lead times require higher safety stock to prevent stockouts during the wait period.' },
      { question: 'How accurate are demand forecasts?', answer: 'Forecast accuracy depends on data quality, demand stability, and the forecasting method. Most businesses achieve 70-90% accuracy. Combining multiple methods and regularly updating forecasts improves reliability.' },
    ],
    relatedSlugs: ['safety-stock-calculator', 'break-even-calculator'],
  },
  {
    name: 'Safety Stock Calculator',
    slug: 'safety-stock-calculator',
    description: 'Calculate the optimal safety stock level to protect against demand variability and supply chain disruptions. Balance availability with holding costs.',
    category: 'supply-chain',
    icon: 'ShieldCheck',
    formula: 'Safety Stock = Z-score \u00D7 \u221A[(Lead Time \u00D7 \u03C3\u00B2demand) + (Average Demand \u00D7 \u03C3\u00B2lead time)]\nSimple method: Safety Stock = (Max Daily Demand \u00D7 Max Lead Time) - (Average Daily Demand \u00D7 Average Lead Time)',
    example: 'Average demand: 100 units/day, Std dev demand: 20, Average lead time: 10 days, Std dev lead time: 2 days, Z-score (95%): 1.65\nSafety Stock = 1.65 \u00D7 \u221A[(10 \u00D7 400) + (100 \u00D7 4)] = 1.65 \u00D7 \u221A4400 = 1.65 \u00D7 66.33 = 109 units',
    faqs: [
      { question: 'What is safety stock?', answer: 'Safety stock is extra inventory held as a buffer against unexpected demand spikes or supply delays. It acts as insurance against stockouts, which can lead to lost sales and customer dissatisfaction.' },
      { question: 'What Z-score should I use?', answer: 'Z-score corresponds to your desired service level: 90% = 1.28, 95% = 1.65, 98% = 2.05, 99% = 2.33. Higher service levels require more safety stock. Most businesses target 95-98%.' },
      { question: 'How do I reduce safety stock needs?', answer: 'Reduce lead time variability with reliable suppliers, improve demand forecasting, implement just-in-time practices, use vendor-managed inventory, and diversify your supplier base for redundancy.' },
    ],
    relatedSlugs: ['inventory-forecast-calculator', 'break-even-calculator'],
  },
];

export function getCalculatorBySlug(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getCalculatorsByCategory(category: string): CalculatorMeta[] {
  return calculators.filter((c) => c.category === category);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

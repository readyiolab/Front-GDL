import React, { useState } from 'react';
import {
  ArrowRight, DollarSign, Users, TrendingUp, Award,
  CheckCircle, Globe, Info, AlertTriangle, Star,
  ChevronRight, Gift, Briefcase, Calendar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CompensationPlan() {
  const [activeTab, setActiveTab] = useState('retail');

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative py-36 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://via.placeholder.com/1920x800')`, // Replaced placeholder with a working URL
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
            NHT Global <span className="text-orange-400">Compensation Plan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10">
            Unlock Your Earning Potential with Network Marketing
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-full text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Get Started Now"
            >
              Get Started Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-4 px-8 rounded-full text-lg"
              aria-label="Learn More"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-10 bg-orange-50 border-y border-orange-100">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="flex items-start gap-4 bg-white p-6 border-l-4 border-orange-500">
            <Info className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <p className="text-gray-700 font-semibold mb-1">Important Note:</p>
              <p className="text-gray-600">
                Please visit our Opportunity Overview page if you have directly landed on this page. Some important information provided there will help you better understand the NHT Global Compensation Plan explained below.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Updated Introduction Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900  text-center mb-8">
            Understanding NHT Global's Compensation Plan
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Before we start, please review the Earning Disclaimer on GetDreamLife and refer to NHT Global's Statement of Average Gross Compensation to better understand the income potential.
            </p>
            <p>
              Since you have a basic understanding of the terminology used in NHT Global from the Opportunity page, let's dive into its Compensation or Earning Plan in detail.
            </p>
            <p>
              As you start your network marketing business, it helps to know how much you can earn. This can also be a great way to understand how to leverage your individual strengths to make money (e.g., some people are good at building networks, others are better at retailing).
            </p>
            <p>
              NHT Global's Compensation Plan is an industry benchmark. The plan is now being adopted by new companies in this domain as a case study of how a company can grow fast while helping its distributors succeed through network marketing.
            </p>
          </div>
          <div className="flex gap-4 mt-8 justify-center items-center">
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1"
              aria-label="View Earning Disclaimer"
            >
              View Earning Disclaimer <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1"
              aria-label="Statement of Average Gross Compensation"
            >
              Statement of Average Gross Compensation <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features of Industry-Leading Compensation Plan
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-orange-500" aria-hidden="true" />,
                title: "No Expiry of Bonus Volume (BV)",
                description: "Your earned BV never expires, allowing you to redeem points whenever you choose.",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-orange-500" aria-hidden="true" />,
                title: "Cycle Bonus Weekly Potential at US$50,000",
                description: "One of the highest weekly earning potentials in the industry.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-orange-500" aria-hidden="true" />,
                title: "Unlimited Depth Income",
                description: "Our Infinite Binary Plan allows you to earn from unlimited levels in your organization.",
              },
              {
                icon: <Gift className="h-10 w-10 text-orange-500" aria-hidden="true" />,
                title: "No Monthly Targets or Minimum Purchase*",
                description: "Grow your business at your own pace without pressure to meet monthly quotas.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-orange-500" aria-hidden="true" />,
                title: "Highest Commission from Day 1",
                description: "No waiting period or level-based commission plan - earn top rates immediately.",
              },
              {
                icon: <Star className="h-10 w-10 text-orange-500" aria-hidden="true" />,
                title: "True Financial Potential",
                description: "Unmatched compensation plan designed for maximum earning opportunities.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <CardContent className="p-6 flex flex-col">
                  <div className="p-3 bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     {/* Highlights Section  */}
     <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Highlights of NHT Global Compensation Plan
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "NHT Global compensation plan allows you to earn a maximum of US$50,000 per week.",
              "NHT Global has helped over a dozen individuals become big earners in the last year alone.",
              "NHT Global allows you to earn 20% on your weak leg (details on weak & strong leg below), while other companies allow a maximum of 10%.",
              "NHT Global does not set weekly or monthly targets*, so you can grow your business at your own pace. No pressure, you are your own boss.",
              "NHT Global does not take back or expire any unclaimed points (called Business Volume or BV) in your sales, you can redeem your BVs whenever you want. In most companies, you lose your BVs if not claimed or if you do not hit your targets.",
            ].map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-orange-500 text-white p-1 rounded-full mt-1 flex-shrink-0">
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                </div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Ways to Earn Section with Detailed Earning Types */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NHT Global Compensation Plan Offers You 4 Ways to Earn
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="retail">Retail Profits</TabsTrigger>
              <TabsTrigger value="direct">Direct Sales</TabsTrigger>
              <TabsTrigger value="cycle">Cycle Bonus</TabsTrigger>
              <TabsTrigger value="matching">Matching Bonus</TabsTrigger>
            </TabsList>

            {/* Earning Type 1: Retail Profits/Income */}
            <TabsContent value="retail">
              <Card className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 opacity-90"></div>
                <CardContent className="relative z-10 p-8 text-white">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <DollarSign className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4 text-white">Retail Profits/Income</CardTitle>
                  <p className="text-white/90 mb-4">
                    As an NHT Global Distributor, you may purchase products at wholesale and resell them at retail, thereby earning retail profits. With your own e-commerce site, you can also conduct retail sales worldwide.
                  </p>
                  <Accordion type="single" collapsible className="text-white/90">
                    <AccordionItem value="overview">
                      <AccordionTrigger>Overview</AccordionTrigger>
                      <AccordionContent>
                        All of us know of a retail grocery store in our area. The shopkeeper makes retail income on whatever they sell. They buy products at wholesale price and sell at a retail price; the difference is their profit.
                        <br />
                        <strong>Profit = Retail Price – Wholesale Price</strong>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="profit-margins">
                      <AccordionTrigger>Profit Margins by Membership Level</AccordionTrigger>
                      <AccordionContent>
                        <table className="w-full text-left">
                          <thead>
                            <tr>
                              <th className="border-b py-2">Membership Level</th>
                              <th className="border-b py-2">Profit Margin (Discount %)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-2">Gold</td>
                              <td className="py-2">34%</td>
                            </tr>
                            <tr>
                              <td className="py-2">Silver</td>
                              <td className="py-2">11%</td>
                            </tr>
                            <tr>
                              <td className="py-2">Bronze</td>
                              <td className="py-2">3%</td>
                            </tr>
                          </tbody>
                        </table>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="how-to-sell">
                      <AccordionTrigger>How to Sell</AccordionTrigger>
                      <AccordionContent>
                        There are countless ways to sell products to clients as a retailer (NHT Global Leaders will train you how to do this; you don’t need to be a marketing expert to start earning). Many NHT Global distributors earn good retail income per month just by retailing through product demos. Retail Income is one of the fastest ways to start earning with NHT Global.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ecommerce">
                      <AccordionTrigger>E-Commerce Features</AccordionTrigger>
                      <AccordionContent>
                        You’ve heard of Amazon, eBay, or other e-commerce sites; NHT Global allows you to set up your own website to sell all NHT Global products online worldwide where NHT Global is physically present. The beauty of NHT Global’s retail option is that you can retail from the comfort of your home and at your own time with features like:
                        <ul className="list-disc pl-5 mt-2">
                          <li>Your own E-Commerce website (allowing online product sales)</li>
                          <li>Global business setup (E-Commerce website available in 18 languages, enabling business in countries even where you don’t know the language)</li>
                          <li>Easy ordering, billing, and shipping (no need to store products, manage employees, or logistics; NHT Global handles everything)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earning Type 2: Direct Sales Commission & Generation Bonus */}
            <TabsContent value="direct">
              <Card className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 opacity-90"></div>
                <CardContent className="relative z-10 p-6 sm:p-8 md:p-10 text-white">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    Direct Sales Commission & Generation Bonus
                  </CardTitle>
                  <p className="text-white/90 mb-6 text-sm sm:text-base">
                    Leverage the power of your network with NHT Global’s Direct Sales Commission. Earn commissions on the Bonus Volume (BV) generated by your personally sponsored distributors, up to three levels deep in your Generation Tree. Build a strong team and enjoy lifetime commissions on their purchases.
                  </p>
                  <Accordion type="single" collapsible className="text-white/90">
                    <AccordionItem value="overview">
                      <AccordionTrigger className="text-sm sm:text-base">Overview</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        The Direct Sales Commission rewards you for recruiting and supporting new distributors in your network. You earn a percentage of the Bonus Volume (BV) generated by product purchases from your personally sponsored distributors (Level 1), as well as those sponsored by them (Levels 2 and 3). This creates a multi-level income stream based on your team’s sales activity.
                        <br /><br />
                        The commission percentage depends on your Membership Rank (Gold, Silver, or Bronze), with Gold members earning the highest rates. This structure incentivizes both team-building and rank advancement.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="commission-structure">
                      <AccordionTrigger className="text-sm sm:text-base">Commission Structure</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        The following table outlines the commission percentages you earn based on your Membership Rank and the sponsor level of your team members:
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full text-left border-collapse" aria-label="Commission Structure Table">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border-b border-white/30 py-3 px-4">Team Member Sponsor Level</th>
                                <th className="border-b border-white/30 py-3 px-4">Gold</th>
                                <th className="border-b border-white/30 py-3 px-4">Silver</th>
                                <th className="border-b border-white/30 py-3 px-4">Bronze</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Level 1</td>
                                <td className="border-b border-white/30 py-3 px-4">10%</td>
                                <td className="border-b border-white/30 py-3 px-4">5%</td>
                                <td className="border-b border-white/30 py-3 px-4">3%</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Level 2</td>
                                <td className="border-b border-white/30 py-3 px-4">5%</td>
                                <td className="border-b border-white/30 py-3 px-4">3%</td>
                                <td className="border-b border-white/30 py-3 px-4">-</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Level 3</td>
                                <td className="border-b border-white/30 py-3 px-4">3%</td>
                                <td className="border-b border-white/30 py-3 px-4">-</td>
                                <td className="border-b border-white/30 py-3 px-4">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4">
                          <strong>Example:</strong> If you’re a Gold member and your Level 1 distributor (e.g., Jane) generates 10,000 BV, you earn 10% (1,000 BV). If Jane’s sponsored distributor (Level 2, e.g., Susan) generates 5,000 BV, you earn 5% (250 BV). If Susan’s sponsored distributor (Level 3, e.g., Chris) generates 3,000 BV, you earn 3% (90 BV). These commissions apply to lifetime purchases, creating a sustainable income stream.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="binary-plan">
                      <AccordionTrigger className="text-sm sm:text-base">Understanding the Binary Plan</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        NHT Global’s Binary Plan allows you to build two teams: a Left Sales Team and a Right Sales Team. You can directly sponsor distributors into either team, and they become your Level 1 sponsored members. As your team grows, distributors sponsored by your Level 1 members become your Level 2 members, and those sponsored by Level 2 members become your Level 3 members.
                        <br /><br />
                        <strong>Visual Example:</strong>
                        <ul className="list-disc pl-5 mt-2">
                          <li><strong>You</strong> sponsor Jane and John (Level 1, Blue).</li>
                          <li><strong>Jane</strong> sponsors Susan and Lee (your Level 2, Green).</li>
                          <li><strong>Susan</strong> sponsors Chris (your Level 3, Orange).</li>
                          <li><strong>You</strong> also sponsor Mike and Ravi (Level 1, Blue).</li>
                        </ul>
                        <p className="mt-4">
                          This structure allows you to earn commissions on purchases made by your team members up to three levels deep, with the highest commissions coming from your directly sponsored (Level 1) distributors.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="how-to-earn">
                      <AccordionTrigger className="text-sm sm:text-base">How to Maximize Earnings</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        To maximize your Direct Sales Commissions:
                        <ul className="list-disc pl-5 mt-2">
                          <li><strong>Recruit Actively:</strong> Sponsor motivated individuals who are eager to build their own businesses.</li>
                          <li><strong>Train Your Team:</strong> Provide guidance and resources to help your distributors succeed, as their sales directly impact your commissions.</li>
                          <li><strong>Aim for Gold Rank:</strong> Achieving Gold membership unlocks the highest commission rates (10%, 5%, 3%) across all three levels.</li>
                          <li><strong>Encourage Product Purchases:</strong> Promote consistent product purchases within your team to increase Bonus Volume.</li>
                          <li><strong>Leverage NHT Global Resources:</strong> Utilize training programs and marketing tools provided by NHT Global to support your team’s growth.</li>
                        </ul>
                        <p className="mt-4">
                          By focusing on team-building and mentorship, you can create a thriving network that generates significant commissions over time.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earning Type 3: Cycle Bonus (The Two-Team Infinity Compensation System) */}
            <TabsContent value="cycle">
              <Card className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 opacity-90"></div>
                <CardContent className="relative z-10 p-6 sm:p-8 md:p-10 text-white">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    Cycle Bonus (The Two-Team Infinity Compensation System)
                  </CardTitle>
                  <p className="text-white/90 mb-6 text-sm sm:text-base">
                    Unlock unlimited earning potential with NHT Global’s Cycle Bonus. Build two teams—Left and Right—and earn commissions on the Bonus Volume (BV) generated by product purchases across your entire network, with no depth limit. Known as the Infinite Binary Plan, this system rewards you for team activity at any level, even down to the 1000th level.
                  </p>
                  <Accordion type="single" collapsible className="text-white/90">
                    <AccordionItem value="overview">
                      <AccordionTrigger className="text-sm sm:text-base">Overview</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        The Cycle Bonus is the cornerstone of NHT Global’s Infinite Binary Plan. You develop two teams—Left Sales Team and Right Sales Team—by sponsoring distributors and promoting product sales. Every product purchase (direct or via your e-commerce site) generates Bonus Volume (BV), which is tracked in your online account. Unlike other companies, your BV never expires, allowing you to build your business at your own pace without losing earned volume.
                        <br /><br />
                        You earn commissions based on the BV accumulated in both teams, with no limit on how deep your network extends. This means you can earn from distributors at any level, making it a truly infinite earning opportunity.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cycle-mechanism">
                      <AccordionTrigger className="text-sm sm:text-base">How Cycles Work</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        Each week, the system calculates the BV generated by your Left and Right teams. A cycle is completed when you accumulate 2500 BV in one team and 1250 BV in the other (in any combination, e.g., 2500 BV Left + 1250 BV Right or vice versa). Any excess BV carries over to the next week for recalculation, ensuring no effort is wasted.
                        <br /><br />
                        <strong>Cycle Bonus Table (Example):</strong>
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full text-left border-collapse" aria-label="Cycle Bonus Example Table">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border-b border-white/30 py-3 px-4">Left Side Team (BV)</th>
                                <th className="border-b border-white/30 py-3 px-4">Right Side Team (BV)</th>
                                <th className="border-b border-white/30 py-3 px-4">Cycles Completed</th>
                                <th className="border-b border-white/30 py-3 px-4">Carry Over BV</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">2500 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">1250 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">1</td>
                                <td className="border-b border-white/30 py-3 px-4">0 BV</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">5000 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">2750 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">2</td>
                                <td className="border-b border-white/30 py-3 px-4">250 BV (Right)</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">10150 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">5350 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">4</td>
                                <td className="border-b border-white/30 py-3 px-4">150 BV (Left) & 350 BV (Right)</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">10150 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">2750 BV</td>
                                <td className="border-b border-white/30 py-3 px-4">2</td>
                                <td className="border-b border-white/30 py-3 px-4">5150 BV (Left) & 250 BV (Right)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4">
                          <strong>Example:</strong> If your Left Team generates 5000 BV and your Right Team generates 2750 BV, you complete 2 cycles (2 x [2500 BV + 1250 BV]). The remaining 250 BV from the Right Team carries over to the next week.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="earnings-structure">
                      <AccordionTrigger className="text-sm sm:text-base">Earnings Structure</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        Your earnings per cycle depend on your Membership Rank (Gold, Silver, or Bronze). The table below shows the payout for completed cycles:
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full text-left border-collapse" aria-label="Cycle Bonus Payout Table">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border-b border-white/30 py-3 px-4">No. of Cycles</th>
                                <th className="border-b border-white/30 py-3 px-4">Gold</th>
                                <th className="border-b border-white/30 py-3 px-4">Silver</th>
                                <th className="border-b border-white/30 py-3 px-4">Bronze</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">1 Cycle</td>
                                <td className="border-b border-white/30 py-3 px-4">US $250</td>
                                <td className="border-b border-white/30 py-3 px-4">US $125</td>
                                <td className="border-b border-white/30 py-3 px-4">US $62.50</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">2 Cycles</td>
                                <td className="border-b border-white/30 py-3 px-4">US $500</td>
                                <td className="border-b border-white/30 py-3 px-4">US $250</td>
                                <td className="border-b border-white/30 py-3 px-4">US $125</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">5 Cycles</td>
                                <td className="border-b border-white/30 py-3 px-4">US $1250</td>
                                <td className="border-b border-white/30 py-3 px-4">US $625</td>
                                <td className="border-b border-white/30 py-3 px-4">US $312.50</td> {/* Corrected typo */}
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">10 Cycles</td>
                                <td className="border-b border-white/30 py-3 px-4">US $2500</td>
                                <td className="border-b border-white/30 py-3 px-4">US $1250</td>
                                <td className="border-b border-white/30 py-3 px-4">US $625</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4">
                          <strong>Weak Leg Earnings:</strong> You earn up to 20% of the BV from your weaker leg (the team with less BV). For example, in a cycle with 2500 BV (strong leg) and 1250 BV (weak leg), a Gold member earns 20% of 1250 BV = US $250 per cycle.
                        </p>
                        <p className="mt-2">
                          <strong>Weekly Cap:</strong> The Cycle Bonus is capped at US $50,000 per week (US $200,000 per month), one of the highest in the industry. Distributors with large teams can complete multiple cycles daily, maximizing their earnings.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="how-to-maximize">
                      <AccordionTrigger className="text-sm sm:text-base">How to Maximize Earnings</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        To maximize your Cycle Bonus earnings:
                        <ul className="list-disc pl-5 mt-2">
                          <li><strong>Build Balanced Teams:</strong> Encourage sales activity in both Left and Right teams to complete cycles efficiently.</li>
                          <li><strong>Aim for Gold Rank:</strong> Gold members earn the highest payout per cycle (US $250), doubling Silver and quadrupling Bronze earnings.</li>
                          <li><strong>Promote Product Sales:</strong> Drive consistent product purchases through your network to increase BV accumulation.</li>
                          <li><strong>Leverage E-Commerce:</strong> Utilize your NHT Global e-commerce site to generate BV from global sales, even from team members you don’t directly sponsor.</li>
                          <li><strong>Scale Your Network:</strong> Recruit and train motivated distributors to expand your teams, as earnings extend to infinite levels.</li>
                          <li><strong>Monitor BV:</strong> Use your online account to track BV and strategize carry-over to optimize weekly cycles.</li>
                        </ul>
                        <p className="mt-4">
                          Many NHT Global distributors earn thousands of dollars weekly by building large, active teams that complete multiple cycles frequently.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earning Type 4: Matching Bonus */}
            <TabsContent value="matching">
              <Card className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 opacity-90"></div>
                <CardContent className="relative z-10 p-6 sm:p-8 md:p-10 text-white">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <Award className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    Matching Bonus
                  </CardTitle>
                  <p className="text-white/90 mb-6 text-sm sm:text-base">
                    The Matching Bonus is the icing on the cake of NHT Global’s Compensation Plan. Earn a percentage of the Cycle Bonus income generated by your personally sponsored team members, up to three levels deep. This passive income stream grows as your team thrives, allowing you to earn worldwide while you sleep.
                  </p>
                  <Accordion type="single" collapsible className="text-white/90">
                    <AccordionItem value="overview">
                      <AccordionTrigger className="text-sm sm:text-base">Overview</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        The Matching Bonus rewards you for the success of your team by giving you a percentage of the Cycle Bonus earnings of your Level 1, Level 2, and Level 3 sponsored distributors. As your team members earn through the Cycle Bonus, you receive a matching percentage of their income, creating a powerful passive income opportunity.
                        <br /><br />
                        This bonus leverages your team-building efforts, allowing you to benefit from the activity of distributors you may not even know, across the globe. It’s a key component of achieving the “Dream Life” with NHT Global.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="bonus-structure">
                      <AccordionTrigger className="text-sm sm:text-base">Bonus Structure</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        The Matching Bonus percentage depends on your Membership Rank (Gold, Silver, or Bronze) and the sponsor level of your team members. The percentages mirror those of the Direct Sales Commission:
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full text-left border-collapse" aria-label="Matching Bonus Percentage Table">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border-b border-white/30 py-3 px-4 min-w-[120px]">Team Member Sponsor Level</th>
                                <th className="border-b border-white/30 py-3 px-4 min-w-[80px]">Gold</th>
                                <th className="border-b border-white/30 py-3 px-4 min-w-[80px]">Silver</th>
                                <th className="border-b border-white/30 py-3 px-4 min-w-[80px]">Bronze</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Level 1</td>
                                <td className="border-b border-white/30 py-3 px-4">10%</td>
                                <td className="border-b border-white/30 py-3 px-4">5%</td>
                                <td className="border-b border-white/30 py-3 px-4">3%</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Level 2</td>
                                <td className="border-b border-white/30 py-3 px-4">5%</td>
                                <td className="border-b border-white/30 py-3 px-4">3%</td>
                                <td className="border-b border-white/30 py-3 px-4">-</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Level 3</td>
                                <td className="border-b border-white/30 py-3 px-4">3%</td>
                                <td className="border-b border-white/30 py-3 px-4">-</td>
                                <td className="border-b border-white/30 py-3 px-4">-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4">
                          <strong>Example (Gold Rank):</strong> If your team members earn Cycle Bonuses as follows:
                        </p>
                        <div className="overflow-x-auto mt-2">
                          <table className="w-full text-left border-collapse" aria-label="Matching Bonus Example Table">
                            <thead>
                              <tr className="bg-white/10">
                                <th className="border-b border-white/30 py-3 px-4 min-w-[100px]">Team Member</th>
                                <th className="border-b border-white/30 py-3 px-4 min-w-[100px]">Sponsored Level</th>
                                <th className="border-b border-white/30 py-3 px-4 min-w-[120px]">Cycle Bonus Income</th>
                                <th className="border-b border-white/30 py-3 px-4 min-w-[100px]">Matching Bonus %</th>
                                <th className="border-b border-white/30 py-3 px-4 min-w-[120px]">Matching Bonus Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Jane</td>
                                <td className="border-b border-white/30 py-3 px-4">Level 1</td>
                                <td className="border-b border-white/30 py-3 px-4">US $10,000</td>
                                <td className="border-b border-white/30 py-3 px-4">10%</td>
                                <td className="border-b border-white/30 py-3 px-4">US $1,000</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Lee</td>
                                <td className="border-b border-white/30 py-3 px-4">Level 2</td>
                                <td className="border-b border-white/30 py-3 px-4">US $5,000</td>
                                <td className="border-b border-white/30 py-3 px-4">5%</td>
                                <td className="border-b border-white/30 py-3 px-4">US $250</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4">Ali</td>
                                <td className="border-b border-white/30 py-3 px-4">Level 3</td>
                                <td className="border-b border-white/30 py-3 px-4">US $1,000</td>
                                <td className="border-b border-white/30 py-3 px-4">3%</td>
                                <td className="border-b border-white/30 py-3 px-4">US $30</td>
                              </tr>
                              <tr>
                                <td className="border-b border-white/30 py-3 px-4 font-semibold" colSpan="4">Total Matching Bonus Income</td>
                                <td className="border-b border-white/30 py-3 px-4 font-semibold">US $1,280</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4">
                          With just one directly sponsored member (Jane) and two others in your downline, you earn US $1,280. Imagine the potential with hundreds of team members across multiple levels!
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="how-to-maximize">
                      <AccordionTrigger className="text-sm sm:text-base">How to Maximize</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        To maximize your Matching Bonus earnings:
                        <ul className="list-disc pl-5 mt-2">
                          <li><strong>Mentor Your Team:</strong> Train your personally sponsored distributors to build strong teams and earn significant Cycle Bonuses, as their earnings directly increase your Matching Bonus.</li>
                          <li><strong>Aim for Gold Rank:</strong> Gold members earn the highest Matching Bonus percentages (10%, 5%, 3%), maximizing your income across all three levels.</li>
                          <li><strong>Expand Your Network:</strong> Recruit more Level 1 distributors to grow your downline, increasing the number of team members contributing to your Matching Bonus.</li>
                          <li><strong>Leverage Global Growth:</strong> Support your team to expand internationally using NHT Global’s e-commerce platform, as their worldwide Cycle Bonuses contribute to your income.</li>
                          <li><strong>Stay Engaged:</strong> Provide ongoing support and motivation to ensure your team remains active, as consistent Cycle Bonus earnings drive your Matching Bonus.</li>
                        </ul>
                        <p className="mt-4">
                          The Matching Bonus allows you to earn passive income while your team works, even during vacations. This is the “Dream Life” where your income grows automatically, credited to your bank account regardless of your location.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="why-it-matters">
                      <AccordionTrigger className="text-sm sm:text-base">Why It Matters</AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base">
                        The Matching Bonus multiplies your earning potential by allowing you to benefit from all four earning types simultaneously. With initial effort in building and mentoring your team, your income becomes sustainable and scalable. Your team’s growth—whether in your city, country, or worldwide—contributes to your success, creating a truly global business.
                        <br /><br />
                        Contact us via the <a href="/contact" className="text-orange-300 hover:text-orange-400 underline">Contact Page</a> for assistance or to learn more about maximizing the Matching Bonus and achieving your financial goals with NHT Global.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-700 italic">
              Besides these, the company has Recognition Programs to encourage business growth, trips to exotic locations, extra monetary incentives, and more.
            </p>
            <Button
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-full flex items-center gap-2 mx-auto shadow-md hover:shadow-lg"
              aria-label="Start Your NHT Global Journey"
            >
              Start Your NHT Global Journey
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials or Recognition Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of successful NHT Global distributors worldwide who are building their dream lives through our industry-leading compensation plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-lg"
              aria-label="Join NHT Global Today"
            >
              Join NHT Global Today
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-bold py-4 px-10 rounded-full"
              aria-label="Request More Information"
            >
              Request More Information
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" aria-hidden="true" />
            <p className="text-sm text-gray-500">
              *Minimum activity requirements apply to earn commissions. This presentation is for illustrative purposes only. Please refer to the NHT Global Statement of Average Gross Compensation for actual income statistics. The success of any NHT Global Distributor depends on their own effort, dedication, and skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, BarChart3, Home, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function MarketTrends() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Header />
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Market Trends & Insights</h2>
          <p className="text-muted-foreground">
            Stay informed with the latest real estate market trends and data-driven insights.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="prices">Price Trends</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="forecast" className="hidden md:block">
              Forecast
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Home Price</CardTitle>
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$425,000</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 font-medium inline-flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" /> 4.2%
                    </span>{" "}
                    from last year
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Days on Market</CardTitle>
                  <BarChart3 className="h-4 w-4 text-rose-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32 days</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-rose-500 font-medium inline-flex items-center">
                      <ArrowDown className="mr-1 h-3 w-3" /> 8.5%
                    </span>{" "}
                    from last year
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available Listings</CardTitle>
                  <Home className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,245</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-amber-500 font-medium inline-flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" /> 12.3%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Market Summary</CardTitle>
                <CardDescription>Current real estate market conditions and key indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    The real estate market continues to show strong growth in Q2 2023, with home prices increasing by
                    4.2% year-over-year. Despite rising interest rates, buyer demand remains robust in most
                    neighborhoods, particularly for single-family homes and properties with outdoor space.
                  </p>
                  <p>
                    Inventory levels have improved slightly compared to the historic lows of 2022, giving buyers more
                    options but still maintaining a seller's advantage in most price brackets. The luxury market has
                    seen a slight cooling, while entry-level homes continue to sell quickly, often receiving multiple
                    offers.
                  </p>
                  <div className="aspect-video relative mt-4 rounded-lg overflow-hidden border">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Market overview chart"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prices" className="space-y-6">
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Price Trends by Neighborhood</CardTitle>
                <CardDescription>Year-over-year price changes across top neighborhoods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt="Price trends chart"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Fastest Appreciating Areas</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Riverside Heights</span>
                        <span className="text-emerald-500 font-medium">+7.8%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Oakwood Commons</span>
                        <span className="text-emerald-500 font-medium">+6.5%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Maple Grove</span>
                        <span className="text-emerald-500 font-medium">+5.9%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Sunset District</span>
                        <span className="text-emerald-500 font-medium">+5.2%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Price Per Square Foot</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Downtown</span>
                        <span className="font-medium">$425/sq.ft</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Westside</span>
                        <span className="font-medium">$385/sq.ft</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>North Hills</span>
                        <span className="font-medium">$310/sq.ft</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Southbay</span>
                        <span className="font-medium">$275/sq.ft</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historical Price Analysis</CardTitle>
                <CardDescription>5-year price trends and market cycles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] relative">
                  <Image
                    src="/placeholder.svg?height=250&width=800"
                    alt="Historical price chart"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <p>
                    The 5-year analysis shows a consistent upward trend in home values, with a brief plateau during the
                    pandemic followed by accelerated growth. The current price levels represent a 28% increase from
                    2018, outpacing inflation and wage growth in most sectors.
                  </p>
                  <p>
                    Seasonal patterns remain consistent, with spring and early summer showing the highest transaction
                    volumes and modest price premiums compared to fall and winter months.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Listings</CardTitle>
                  <Home className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+248</div>
                  <p className="text-xs text-muted-foreground">New properties this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Months of Supply</CardTitle>
                  <BarChart3 className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 font-medium inline-flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" /> 0.3
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Sales</CardTitle>
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">312</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500 font-medium inline-flex items-center">
                      <ArrowUp className="mr-1 h-3 w-3" /> 5.1%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Buyer Activity</CardTitle>
                  <Users className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">High</div>
                  <p className="text-xs text-muted-foreground">Based on showing requests</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Inventory by Property Type</CardTitle>
                <CardDescription>Current availability across different property categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt="Inventory by property type chart"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Property Type Distribution</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Single Family Homes</span>
                        <span className="font-medium">58%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Condominiums</span>
                        <span className="font-medium">24%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Townhouses</span>
                        <span className="font-medium">12%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Multi-Family</span>
                        <span className="font-medium">6%</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Inventory Changes (YoY)</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Single Family Homes</span>
                        <span className="text-emerald-500 font-medium">+15%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Condominiums</span>
                        <span className="text-emerald-500 font-medium">+22%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Townhouses</span>
                        <span className="text-emerald-500 font-medium">+8%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Multi-Family</span>
                        <span className="text-amber-500 font-medium">+3%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-6">
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Market Forecast</CardTitle>
                <CardDescription>Projected trends for the next 12 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] relative">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt="Market forecast chart"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold">Key Predictions</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <div>
                        <span className="font-medium">Price Growth:</span> Expect moderate appreciation of 3-5% over the
                        next 12 months, with higher growth in suburban areas with good schools and amenities.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      </div>
                      <div>
                        <span className="font-medium">Inventory Levels:</span> Gradual improvement in available homes,
                        though still below historical averages. New construction will help ease some pressure.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                      </div>
                      <div>
                        <span className="font-medium">Interest Rates:</span> Projected to stabilize with potential
                        modest decreases in the latter half of the year, which could boost buyer activity.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                      </div>
                      <div>
                        <span className="font-medium">Market Balance:</span> Moving toward more balanced conditions,
                        though still favoring sellers in most price points below $750,000.
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Economic Factors</CardTitle>
                <CardDescription>Key economic indicators influencing the real estate market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Positive Factors</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2 items-center">
                        <ArrowUp className="h-4 w-4 text-emerald-500" />
                        <span>Strong job market with low unemployment</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <ArrowUp className="h-4 w-4 text-emerald-500" />
                        <span>Millennial buyers entering prime homebuying years</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <ArrowUp className="h-4 w-4 text-emerald-500" />
                        <span>Remote work continuing to drive suburban demand</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <ArrowUp className="h-4 w-4 text-emerald-500" />
                        <span>Limited new construction creating supply constraints</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Challenging Factors</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2 items-center">
                        <ArrowDown className="h-4 w-4 text-rose-500" />
                        <span>Affordability concerns in major markets</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <ArrowDown className="h-4 w-4 text-rose-500" />
                        <span>Higher mortgage rates compared to 2020-2021</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <ArrowDown className="h-4 w-4 text-rose-500" />
                        <span>Inflation pressures on household budgets</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <ArrowDown className="h-4 w-4 text-rose-500" />
                        <span>Potential economic slowdown concerns</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>

  )
}

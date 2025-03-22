"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileMenu } from "@/components/mobile-menu";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <Image
              src="https://ext.same-assets.com/1287963695/1098597131.svg"
              alt="AgencyAnalytics"
              width={150}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium text-sm flex items-center text-[#0c3861]">
                  Features <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[250px]">
                <DropdownMenuItem asChild>
                  <Link href="/features" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">All Features</div>
                      <div className="text-xs text-muted-foreground">View complete feature set</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features#automated-reports" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Automated Reports</div>
                      <div className="text-xs text-muted-foreground">Put your reporting on autopilot</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features#custom-dashboards" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Custom Dashboards</div>
                      <div className="text-xs text-muted-foreground">Fully customizable client dashboards</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features#white-label" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">White Label</div>
                      <div className="text-xs text-muted-foreground">Add your own logo & branding</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features#agency-management" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Client & Staff Management</div>
                      <div className="text-xs text-muted-foreground">Manage team & user activity</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features#ai-insights" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">AI Insights</div>
                      <div className="text-xs text-muted-foreground">Get actionable AI-powered insights</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium text-sm flex items-center text-[#0c3861]">
                  Integrations <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[250px]">
                <DropdownMenuItem asChild>
                  <Link href="/integrations" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">All Integrations</div>
                      <div className="text-xs text-muted-foreground">View all 80+ integrations</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/integrations" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1044981387/2818150891.svg"
                      alt="Google Analytics"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Google Analytics 4</div>
                      <div className="text-xs text-muted-foreground">Intuitive data visualization</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/integrations" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1044981387/4263905291.svg"
                      alt="Google Ads"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Google Ads</div>
                      <div className="text-xs text-muted-foreground">Highlight your marketing impact</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/integrations" className="flex items-center pt-2 border-t mt-2">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Over 80 Integrations</div>
                      <div className="text-xs text-muted-foreground">SEO, PPC, Social, Email, Review and Call Tracking</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium text-sm flex items-center text-[#0c3861]">
                  Resources <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[250px]">
                <DropdownMenuItem asChild>
                  <Link href="/reports" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Reports</div>
                      <div className="text-xs text-muted-foreground">Automated reporting for agencies</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/help-center" className="flex items-center">
                    <Image
                      src="https://ext.same-assets.com/1287963695/1265726636.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <div className="font-semibold">Help Center</div>
                      <div className="text-xs text-muted-foreground">Get help with your account</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="font-medium text-sm text-[#0c3861]" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Button variant="ghost" className="font-medium text-sm text-[#0c3861]" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button className="bg-[#0e69cb] hover:bg-[#0d5eb8] text-white text-sm font-medium h-9 px-4 rounded-md" asChild>
            <Link href="/signup">Start Trial</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import MapPage from "@/pages/MapPage";
import CreateListing from "@/pages/CreateListing";
import Assistant from "@/pages/Assistant";
import Settings from "@/pages/Settings";
import Bookings from "@/pages/Bookings";
import ListingDetail from "@/pages/ListingDetail";
import MobileNav from "@/components/layout/MobileNav";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/map" component={MapPage} />
      <Route path="/create" component={CreateListing} />
      <Route path="/assistant" component={Assistant} />
      <Route path="/settings" component={Settings} />
      <Route path="/bookings" component={Bookings} />
      <Route path="/listing/:id" component={ListingDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background font-sans text-foreground">
          <Router />
          <MobileNav />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

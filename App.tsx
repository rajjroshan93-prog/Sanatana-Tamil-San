import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Deities from "@/pages/Deities";
import DeityDetail from "@/pages/DeityDetail";
import Darshan from "@/pages/Darshan";
import Meditation from "@/pages/Meditation";
import Bhajans from "@/pages/Bhajans";
import Quiz from "@/pages/Quiz";
import Learn from "@/pages/Learn";
import Profile from "@/pages/Profile";

import { AppLayout } from "@/components/layout/AppLayout";
import { BhajanPlayer } from "@/components/BhajanPlayer";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/meditation" component={Meditation} /> {/* Full screen mode */}
      
      <Route>
        <AppLayout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/deities" component={Deities} />
            <Route path="/deity/:id" component={DeityDetail} />
            <Route path="/darshan" component={Darshan} />
            <Route path="/bhajans" component={Bhajans} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/learn" component={Learn} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </AppLayout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <BhajanPlayer />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

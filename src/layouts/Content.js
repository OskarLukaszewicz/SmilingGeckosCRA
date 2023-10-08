import { React } from "react";
import { Route, Switch } from "wouter";

import BlogPost from "../pages/BlogPost";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Offer from "../pages/Offer";
import Storeregulations from "../pages/Storeregulations";

// Types: Lamparcie 1, Gruboogonowe 2, Nowej Kaledonii 3,

export const Content = () => {
  return (
    <Switch>
      <Route path="/blog/:id">{(params) => <BlogPost id={params.id} />}</Route>
      <Route path="/blog">{<Blog />}</Route>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/offer" component={Offer} />
      <Route path="/storeregulations" component={Storeregulations} />
      <Route path="/offer/gekony-lamparcie">{<Offer geckType={1} />}</Route>
      <Route path="/offer/gekony-gruboogonowe">{<Offer geckType={2} />}</Route>
      <Route path="/offer/gekony-nowej-kaledonii">
        {<Offer geckType={3} />}
      </Route>
    </Switch>
  );
};

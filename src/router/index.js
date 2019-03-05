import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ViewEmployee from "@/components/ViewEmployee";
import NewEmployee from "@/components/NewEmployee";
import EditEmployee from "@/components/EditEmployee";
import ProductPage from "@/components/ProductPage";
import ProductView from "@/components/ProductView";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import ShoppingCart from "@/components/ShoppingCart";

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/products/:category/:brand",
      name: "product-page",
      component: ProductPage
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/new",
      name: "new-employee",
      component: NewEmployee
    },
    {
      path: "/about",
      name: "about-us",
      component: AboutPage
    },
    {
      path: "/cart",
      name: "shopping-cart",
      component: ShoppingCart
    },
    {
      path: "/contact",
      name: "contact-us",
      component: ContactPage
    },
    {
      path: "/:employee_id",
      name: "view-employee",
      component: ViewEmployee
    },
    {
      path: "/:category/:product_id",
      name: "product-view",
      component: ProductView
    },
    {
      path: "/edit/:employee_id",
      name: "edit-employee",
      component: EditEmployee
    }
  ]
});

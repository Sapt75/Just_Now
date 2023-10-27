import './App.css';
import './Components/Global.css';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import HomePage from './Components/HomePage';
import CarBrandPage from './Components/CarBrandPage';
// import MainFooter from './Components/MainFooter';
// import MostSearchedCars from './Components/MostSearchedCars';
import NavHeader from './Components/NavHeader';
// import TopHeader from './Components/TopHeader';
// import TempFooter from './Components/TempFooter';
import CarModelPage from './Components/CarModelPage';
import VariantPage from './Components/VariantPage/VariantPage';
import CarDealersPage from './Components/CarDealersPage/CarDealersPage';
import ErrorPage from './Components/ErrorPage';
import TestPage from './Components/Navebar/TestPage';
import Navebar from '../src/Components/Navebar/Navebar';
import NewFooter from './Components/Footer/NewFooter';
import LeadGenerationForm from './Components/LeadGenerationForm/LeadGenerationForm';
import CarPriceDetails from './Components/CarPriceDetails/CarPriceDetails';
import Testone from './Components/TestFolder/Testone';
import Testtwo from './Components/TestFolder/Testtwo';
import CarVariantTestPage from './Components/VariantPage/CarVariantTestPage';
import CarVariantTestPageNew from './Components/VariantPage/CarVariantTestPageNew';
import Testthree from './Components/TestFolder/Testthree';
import TestMain from './Components/TestFolder/TestMain';
import TestBrand from './Components/TestFolder/TestBrand';
import CarFilters from './Components/CarFilters';
import CarPriceFilter from './Components/CarPriceFilter';
import LocationState from './context/LocationState';
import PriceBreakupPage from './Components/VariantPage/PriceBreakupPage';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Terms_Conditions from './Components/Terms_Conditions';
import AboutUs from './Components/About';




function App() {


  return (

    <div className="App">
      {/* <TopHeader /> */}
      <LocationState>

        {/* <HomePage /> */}
        <Router >
          <Navebar />
          <NavHeader />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/new-cars/:brand' element={<CarBrandPage />} />
            <Route path='/new-cars/:brand/:model' element={<CarModelPage />} />
            <Route path='/car-variant' element={<VariantPage />} />
            <Route path='/car-variant-test/:id' element={<CarVariantTestPage />} />
            <Route path='/new-car-dealers/*' element={<CarDealersPage />} />
            <Route path='/lead-generating-form' element={<LeadGenerationForm />} />
            <Route path='/car-price-details' element={<CarPriceDetails />} />
            <Route path='/getonroadprice' element={<HomePage />} />
            <Route path='/getonroadprice/car-model:brand/:model' element={<CarModelPage />} />
            <Route path='/getonroadprice/car-variant' element={<VariantPage />} />
            {/* <Route path='/getonroadprice/car-dealers' element={<CarDealersPage />} /> */}
            <Route path='/getonroadprice/lead-generating-form' element={<LeadGenerationForm />} />
            <Route path='/getonroadprice/car-price-details' element={<CarPriceDetails />} />
            <Route path='/*' element={<ErrorPage />} />
            <Route path='/testpage' element={<TestPage />} />
            <Route path='/testone' element={<Testone />} />
            <Route path='/testtwo' element={<Testtwo />} />
            <Route path='/testthree' element={<Testthree />} />
            <Route path='/testmain' element={<TestMain />} />
            <Route path='/testbrand/:brand/:pageNumber' element={<TestBrand />} />
            <Route path='/testbrand/:brand/' element={<TestBrand />} />
            <Route path='/new-cars/:brand/:model/:version' element={<CarVariantTestPageNew />} />
            <Route path='/cars/:type/:value' element={<CarFilters />} />
            <Route path='/new-car-price/:value' element={<CarPriceFilter />} />
            <Route path='/:brand/:model/:location' element={<PriceBreakupPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms' element={<Terms_Conditions />} />
            <Route path='/about-us' element={<AboutUs />} />
            {/* <Route path='/' */}
            {/* <Route path='getonroadprice/home' element={<HomePage/>}/> */}
            {/* <Route path='/home' element={<HomePage/>}/> */}
            {/* <Route path='*' element={<HomePage/>}/> */}
            {/* <Route path="*" element={<HomePage />} /> */}
            {/* <Route path="*" element={<ErrorPage />} /> */}
            {/* <Route path='getonroadprice/car-brand' element={<CarBrandPage/>}/> */}
            {/* <Route path='/car-brand' element={<CarBrandPage/>}/> */}
            {/* <Route path='getonroadprice/car-model' element={<CarModelPage/>}/> */}
            {/* <Route path='/car-model' element={<CarModelPage/>}/> */}
            {/* <Route path='/Car' element=""/> */}
          </Routes>
        </Router>
        {/* <TempFooter/> */}
        {/* <MostSearchedCars /> */}
        {/* <MainFooter /> */}
        <NewFooter />
      </LocationState>
    </div>
  );
}

export default App;

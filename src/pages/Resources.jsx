import React, { useState, useEffect } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ResourcesContent from '../components/ResourcesContent';
import CountyResources from '../components/CountyResources';
import CityTownshipResources from '../components/CityTownshipResources';

const Resources = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulated API call to fetch city data
    const fetchCityData = async () => {
      // In a real scenario, this would be an API call to your backend
      const mockData = [
        {
          name: "Minneapolis",
          assessor: "City",
          appealProcess: "Local Board",
          deadline2025: "TBD",
        },
        {
          name: "St. Paul",
          assessor: "County",
          appealProcess: "Open Book",
          deadline2025: "TBD",
        },
        // Add more mock data as needed
      ];
      setCities(mockData);
    };

    fetchCityData();
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="bg-[#0A2647] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-background-logo-inspired.svg')] opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-4">Minnesota Property Tax Resources</h1>
          <p className="text-xl max-w-2xl">Comprehensive information and tools to help you navigate the complex world of Minnesota property taxes.</p>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12">
        <ResourcesContent />
        <CountyResources />
        <CityTownshipResources 
          cities={filteredCities} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
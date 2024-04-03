import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { getAIHeadlines } from "../api/api"; // Burada yapay zeka haberlerini almak için kullanılacak bir API bağlantısı varsayılmıştır.
import ArticleCard from "./ArticleCard";
import Section from "./Section";

const AIHeadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const data = await getAIHeadlines(); //! Yapay zeka haberlerini getiren bir fonksiyon çağrısı
        setHeadlines(data.slice(1, 10)); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching AI headlines:", error);
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <Section>
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">AI Haberleri</h2>
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <AiOutlineLoading className="animate-spin text-4xl text-gray-600" />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {headlines.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default AIHeadlines;

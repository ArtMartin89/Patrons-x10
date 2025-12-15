"use client";

import { useEffect, useState } from "react";
import { ContentData, getContentData } from "@/lib/contentLoader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ConceptSection from "@/components/ConceptSection";
import RecurringLogicSection from "@/components/RecurringLogicSection";
import TrustSection from "@/components/TrustSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import TiersSection from "@/components/TiersSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContentData();
        setContent(data);
      } catch (error) {
        console.error("Error loading content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold">Загрузка...</div>
      </div>
    );
  }

  return (
    <main>
      <HeroSection 
        title={content.hero.title} 
        subtitle={content.hero.subtitle} 
        description={content.hero.description} 
        ctaText={content.hero.ctaText} 
      />
      <ProblemSection 
        title={content.problem.title} 
        text={content.problem.text} 
        stats={content.problem.stats} 
        conclusion={content.problem.conclusion} 
      />
      <ConceptSection 
        title={content.concept.title} 
        points={content.concept.points} 
      />
      <RecurringLogicSection 
        title={content.recurring_logic.title} 
        cards={content.recurring_logic.cards} 
        quote={content.recurring_logic.quote} 
      />
      <TrustSection 
        title={content.trust.title} 
        description={content.trust.description} 
        checklist={content.trust.checklist} 
      />
      <ValuePropositionSection 
        title={content.value_proposition.title} 
        benefits={content.value_proposition.benefits} 
        note={content.value_proposition.note} 
      />
      <TiersSection 
        title={content.tiers.title} 
        subtitle={content.tiers.subtitle} 
        levels={content.tiers.levels} 
      />
      <VisionSection 
        title={content.vision.title} 
        text={content.vision.text} 
      />
      <FooterSection 
        ctaTitle={content.footer.ctaTitle} 
        ctaText={content.footer.ctaText} 
        buttonText={content.footer.buttonText} 
        contacts={content.footer.contacts} 
      />
    </main>
  );
}

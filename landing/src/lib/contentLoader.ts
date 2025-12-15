"use server";

import { revalidatePath } from "next/cache";

// Типы данных для контента
export interface ContentData {
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
  };
  problem: {
    title: string;
    text: string;
    stats: {
      label: string;
      value: string;
    };
    conclusion: string;
  };
  concept: {
    title: string;
    points: string[];
  };
  recurring_logic: {
    title: string;
    cards: {
      title: string;
      text: string;
    }[];
    quote: string;
  };
  trust: {
    title: string;
    description: string;
    checklist: string[];
  };
  value_proposition: {
    title: string;
    benefits: string[];
    note: string;
 };
  tiers: {
    title: string;
    subtitle: string;
    levels: {
      id: string;
      price: string;
      name: string;
      description: string;
    }[];
  };
  vision: {
    title: string;
    text: string;
  };
  footer: {
    ctaTitle: string;
    ctaText: string;
    buttonText: string;
    contacts: {
      email: string;
      telegram: string;
    };
  };
}

// Функция для загрузки данных из локального JSON файла
export async function getContentData(): Promise<ContentData> {
  // В production среде можно использовать process.env для указания пути
 // или использовать динамический импорт
  const content = await import("@/data/content.json");
  return content.default as ContentData;
}
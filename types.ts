export type Category = 'Nutrition' | 'Movement' | 'Sleep' | 'Social Connection' | 'Purpose';

export interface Question {
  category: Category;
  text: string;
}

export type Scores = Record<Category, number>;

export enum AppView {
  LANDING = 'LANDING',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
}
import type {
  Wedding,
  Convention,
  Company,
  Event,
  Hanbok,
  Meal,
  Present,
  Reserve,
  Prepayment,
} from '@prisma/client';

// Next Auth Custom Session Types
import { DefaultUser } from 'next-auth';

interface SessionUser extends DefaultUser {
  username?: string | null;
  admin?: boolean | null;
}

declare module 'next-auth' {
  interface User extends SessionUser {}
  interface Session {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends SessionUser {}
}

// Global Types
import type {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react';

declare type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray
  | Array<InputItem>;

declare global {
  // Auth State
  interface AuthState {
    username: string;
    password: string;
  }

  interface RegisterState extends AuthState {
    secret: string;
  }

  // Auth Action
  interface ActionPayload {
    name: string;
    value: string | number;
  }

  // Serialize User
  interface SerializeUser {
    id: string;
    username: string;
    admin: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  // User Types
  interface ListUsersQueries {
    username?: string;
    cursor?: string;
  }

  // Menu Types
  interface MenuType {
    id: number;
    divide: string;
  }

  interface ListMenuQueries {
    divide: string | null;
    native: string | null;
  }

  // Items Types
  interface ListItemsQueries {
    name?: string;
    cursor?: string;
  }

  interface ItemState {
    count: number;
    price: number;
  }

  interface AddItemPayload {
    name: string;
    divide: string;
    native: string;
    unit: string;
    price: number;
  }

  // Cart Types
  interface AddCartPayload {
    itemId: string;
    userId: string;
    count: number;
    price: number;
  }

  interface CartState {
    title: string;
    hall: string;
    etc: string;
    totalAmount: number;
  }

  // Bill Types
  interface ListFrontsState {
    search: string;
    hall: string;
    userId: string;
  }

  interface AddBillPayload {
    title: string;
    hall: string;
    etc: string;
    userId: string;
    username: string;
  }

  interface ListFrontsQueries {
    title?: string;
    hall?: string;
    userId?: string;
    cursor?: string;
  }

  // Reserve Types
  interface AddReservePayload {
    billId: string;
    reserve: number;
  }

  // Image Upload Type
  interface ImageUploadPayload {
    name: string;
    type: string;
  }

  // Wedding Type
  interface ListWeddingsQueries {
    date?: string;
    cursor?: string;
  }

  interface ReadWedding {
    wedding: Wedding;
    convention: Convention;
    company: Company;
    event: Event;
    hanbok: Hanbok;
    meal: Meal;
    reserve: Reserve;
    present: Present;
    prepayment: Prepayment;
  }

  interface AddSignPayload {
    weddingId: string;
    sex: string;
    image: string;
  }

  interface ExpenseType {
    husbandName: string;
    husbandImage?: string;
    brideName: string;
    brideImage?: string;
    weddingAt: string;
    eventAt: string;
    costHusband: number;
    costBride: number;
    mealHusband: number;
    mealBride: number;
    presentHusband: number;
    presentBride: number;
    reserveHusband: number;
    reserveBride: number;
    companyHusband: number;
    companyBride: number;
    roofTopHusband: number;
    roofTopBride: number;
    ownerWomanHusband: number;
    ownerWomanBride: number;
    ownerManHusband: number;
    ownerManBride: number;
    selectHusband: number;
    selectBride: number;
    frameHusband: number;
    frameBride: number;
    dressHusband: number;
    dressBride: number;
    hairpinHusband: number;
    hairpinBride: number;
    wigHusband: number;
    wigBride: number;
    videoHusband: number;
    videoBride: number;
    etcHusband: number;
    etcBride: number;
    rentalHusband: number;
    rentalBride: number;
    swordHusband: number;
    swordBride: number;
    gloveHusband: number;
    gloveBride: number;
    bouquetHusband: number;
    bouquetBride: number;
    ceremonyHusband?: number;
    ceremonyBride?: number;
    playHusband: number;
    playBride: number;
    anthemHusband: number;
    anthemBride: number;
    moderatorHusband: number;
    moderatorBride: number;
    officiateHusband: number;
    officiateBride: number;
    hanbokPreHusband: number;
    hanbokPreBride: number;
    hanbokPostHusband: number;
    hanbokPostBride: number;
    meals: string;
    mealsPrice: number;
    mealsNumHusband: number;
    mealsNumBride: number;
    present: string;
    presentNumHusband: number;
    presentNumBride: number;
    presentPrice: number;
    reserve: string;
    reservePay: number;
    prePaymentHusband: number;
    prePaymentBride: number;
  }

  interface AddExpensePayload extends ExpenseType {
    onBack: () => void;
    onAddExpense: (e: SyntheticEvent) => void;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setStartDate: Dispatch<SetStateAction<Date>>;
  }

  interface ReadWeddingResponse {
    wedding: Wedding;
    convention: Convention;
    company: Company;
    event: Event;
    hanbok: Hanbok;
    meal: Meal;
    present: Present;
    reserve: Reserve;
    prepayment: Prepayment;
  }

  interface WeddingRequestType {
    husbandName: string;
    husbandImage?: string;
    brideName: string;
    brideImage?: string;
    weddingAt?: Date;
    eventAt: string;
    costHusband: number;
    costBride: number;
    mealHusband: number;
    mealBride: number;
    presentHusband: number;
    presentBride: number;
    reserveHusband: number;
    reserveBride: number;
  }

  interface ConventionRequestType {
    rentalHusband: number;
    rentalBride: number;
    swordHusband: number;
    swordBride: number;
    gloveHusband: number;
    gloveBride: number;
    bouquetHusband: number;
    bouquetBride: number;
    ceremonyHusband?: number;
    ceremonyBride?: number;
  }

  interface CompanyRequestType {
    companyHusband: number;
    companyBride: number;
    roofTopHusband: number;
    roofTopBride: number;
    ownerWomanHusband: number;
    ownerWomanBride: number;
    ownerManHusband: number;
    ownerManBride: number;
    selectHusband: number;
    selectBride: number;
    frameHusband: number;
    frameBride: number;
    dressHusband: number;
    dressBride: number;
    hairpinHusband: number;
    hairpinBride: number;
    wigHusband: number;
    wigBride: number;
    videoHusband: number;
    videoBride: number;
    etcHusband: number;
    etcBride: number;
  }

  interface EventRequestType {
    playHusband: number;
    playBride: number;
    anthemHusband: number;
    anthemBride: number;
    moderatorHusband: number;
    moderatorBride: number;
    officiateHusband: number;
    officiateBride: number;
  }

  interface HanbokRequestType {
    hanbokPreHusband: number;
    hanbokPreBride: number;
    hanbokPostHusband: number;
    hanbokPostBride: number;
  }

  interface MealRequestType {
    meals: string;
    mealsPrice: number;
    mealsNumHusband: number;
    mealsNumBride: number;
  }

  interface PresentRequestType {
    present: string;
    presentNumHusband: number;
    presentNumBride: number;
    presentPrice: number;
  }

  interface ReserveRequestType {
    reserve: string;
    reservePay: number;
  }

  interface PrepaymentRequestType {
    prePaymentHusband: number;
    prePaymentBride: number;
  }
}

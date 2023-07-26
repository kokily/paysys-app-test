import type {
  Wedding,
  Company,
  Convention,
  Event,
  Hanbok,
  Meal,
  Prepayment,
  Present,
  Reserve,
} from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import prevCompany from './company.json';
import prevConvention from './convention.json';
import prevEvent from './event.json';
import prevHanbok from './hanbok.json';
import prevMeal from './meal.json';
import prevPrepayment from './prepayment.json';
import prevPresent from './present.json';
import prevReserve from './reserve.json';

const db = new PrismaClient();

function getCompany() {
  const data: Array<Company> = prevCompany.map((data) => {
    return {
      id: data.id,
      companyHusband: data.company_husband,
      companyBride: data.company_bride,
      roofTopHusband: data.rooftop_husband,
      roofTopBride: data.rooftop_bride,
      ownerWomanHusband: data.owner_woman_husband,
      ownerWomanBride: data.owner_woman_bride,
      ownerManHusband: data.owner_man_husband,
      ownerManBride: data.owner_man_bride,
      selectHusband: data.select_husband,
      selectBride: data.select_bride,
      frameHusband: data.frame_husband,
      frameBride: data.frame_bride,
      dressHusband: data.dress_husband,
      dressBride: data.dress_bride,
      hairpinHusband: data.hairpin_husband,
      hairpinBride: data.hairpin_bride,
      wigHusband: data.wig_husband,
      wigBride: data.wig_bride,
      videoHusband: data.video_husband,
      videoBride: data.video_bride,
      etcHusband: data.etc_husband,
      etcBride: data.etc_bride,
      weddingId: data.weddingId,
    };
  });

  return data;
}

function getConvention() {
  const data: Array<Convention> = prevConvention.map((data) => {
    return {
      id: data.id,
      rentalHusband: data.rental_husband,
      rentalBride: data.rental_bride,
      swordHusband: data.sword_husband,
      swordBride: data.sword_bride,
      gloveHusband: data.glove_husband,
      gloveBride: data.glove_bride,
      bouquetHusband: data.bouquet_husband,
      bouquetBride: data.bouquet_bride,
      ceremonyHusband: data.ceremony_husband,
      ceremonyBride: data.ceremony_bride,
      weddingId: data.weddingId,
    };
  });

  return data;
}

function getEvent() {
  const data: Array<Event> = prevEvent.map((data) => {
    return {
      id: data.id,
      playHusband: data.play_husband,
      playBride: data.play_bride,
      anthemHusband: data.anthem_husband,
      anthemBride: data.anthem_bride,
      moderatorHusband: data.moderator_husband,
      moderatorBride: data.moderator_bride,
      officiateHusband: data.officiate_husband,
      officiateBride: data.officiate_bride,
      weddingId: data.weddingId,
    };
  });

  return data;
}

function getHanbok() {
  const data: Array<Hanbok> = prevHanbok.map((data) => {
    return {
      id: data.id,
      hanbokPreHusband: data.hanbok_pre_husband,
      hanbokPreBride: data.hanbok_pre_bride,
      hanbokPostHusband: data.hanbok_post_husband,
      hanbokPostBride: data.hanbok_post_bride,
      weddingId: data.weddingId,
    };
  });

  return data;
}

function getMeal() {
  const data: Array<Meal> = prevMeal.map((data) => {
    return {
      id: data.id,
      meals: data.meals,
      mealsPrice: data.meals_price,
      mealsNumHusband: data.meals_num_husband,
      mealsNumBride: data.meals_num_bride,
      weddingId: data.weddingId,
    };
  });

  return data;
}

function getPrepayment() {
  const data: Array<Prepayment> = prevPrepayment.map((data) => {
    return {
      id: data.id,
      prePaymentHusband: data.prepayment_husband,
      prePaymentBride: data.prepayment_bride,
      weddingId: data.weddingId,
    };
  });

  return data;
}

function getPresent() {
  const data: Array<Present> = prevPresent.map((data) => {
    return {
      id: data.id,
      present: data.present,
      presentPrice: data.present_price,
      presentNumHusband: data.present_num_husband,
      presentNumBride: data.present_num_bride,
      weddingId: data.weddingId,
    };
  });

  return data;
}

function getReserve() {
  const data: Array<Reserve> = prevReserve.map((data) => {
    return {
      id: data.id,
      reserve: data.reserve,
      reservePay: data.reserve_pay,
      weddingId: data.weddingId,
    };
  });

  return data;
}

async function seed() {
  await Promise.all(
    getCompany().map((data) => {
      return db.company.create({ data });
    })
  );

  await Promise.all(
    getConvention().map((data) => {
      return db.convention.create({ data });
    })
  );

  await Promise.all(
    getEvent().map((data) => {
      return db.event.create({ data });
    })
  );

  await Promise.all(
    getHanbok().map((data) => {
      return db.hanbok.create({ data });
    })
  );

  await Promise.all(
    getMeal().map((data) => {
      return db.meal.create({ data });
    })
  );

  await Promise.all(
    getPrepayment().map((data) => {
      return db.prepayment.create({ data });
    })
  );

  await Promise.all(
    getPresent().map((data) => {
      return db.present.create({ data });
    })
  );

  await Promise.all(
    getReserve().map((data) => {
      return db.reserve.create({ data });
    })
  );
}

seed();

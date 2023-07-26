import type {
  User,
  Item,
  Cart,
  Bill,
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
import prevUser from './user.json';
import prevItem from './item.json';
import prevCart from './cart.json';
import prevBill from './bill.json';
import prevWedding from './wedding.json';
import prevCompany from './company.json';
import prevConvention from './convention.json';
import prevEvent from './event.json';
import prevHanbok from './hanbok.json';
import prevMeal from './meal.json';
import prevPrepayment from './prepayment.json';
import prevPresent from './present.json';
import prevReserve from './reserve.json';

const db = new PrismaClient();

function getUser() {
  const data: Array<User> = prevUser.map((data) => {
    return {
      id: data.id,
      username: data.username,
      password: data.password,
      admin: data.admin,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  });

  return data;
}

function getItem() {
  const data: Array<Item> = prevItem.map((data) => {
    return {
      id: data.id,
      num: data.num,
      name: data.name,
      divide: data.divide,
      native: data.native,
      unit: data.unit,
      price: data.price,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  });

  return data;
}

function getCart() {
  const data: Array<Cart> = prevCart.map((data) => {
    return {
      id: data.id,
      items: data.items.map((item: any) => {
        return {
          id: item.id,
          num: item.num,
          name: item.name,
          divide: item.divide,
          native: item.native,
          unit: item.unit,
          price: item.price,
          count: item.count,
          amount: item.amount,
        };
      }),
      completed: data.completed,
      deleted: data.deleted,
      userId: data.user_id,
      billId: data.bill_id,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  });

  return data;
}

function getBill() {
  const data: Array<Bill> = prevBill.map((data) => {
    return {
      id: data.id,
      title: data.title,
      hall: data.hall,
      etc: data.etc,
      totalAmount: data.total_amount,
      items: data.items.map((item: any) => {
        return {
          id: item.id,
          num: item.num,
          name: item.name,
          divide: item.divide,
          native: item.native,
          unit: item.unit,
          price: item.price,
          count: item.count,
          amount: item.amount,
        };
      }),
      reserve: data.reserve ? parseInt(data.reserve) : null,
      cartId: data.cart_id,
      userId: data.user_id,
      username: data.username,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.created_at),
    };
  });

  return data;
}

function getWedding() {
  const data: Array<Wedding> = prevWedding.map((data) => {
    return {
      id: data.id,
      husbandName: data.husband_name,
      husbandImage: data.husband_image,
      brideName: data.husband_name,
      brideImage: data.bride_image,
      weddingAt: data.wedding_at,
      eventAt: data.event_at,
      costHusband: data.cost_husband,
      costBride: data.cost_bride,
      mealHusband: data.meal_husband,
      mealBride: data.meal_bride,
      presentHusband: data.present_husband,
      presentBride: data.present_bride,
      reserveHusband: data.reserve_husband,
      reserveBride: data.reserve_bride,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  });

  return data;
}

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
    getUser().map((data) => {
      return db.user.create({ data });
    })
  );

  await Promise.all(
    getItem().map((data) => {
      return db.item.create({ data });
    })
  );

  await Promise.all(
    getCart().map((data) => {
      return db.cart.create({
        data: {
          id: data.id,
          items: data.items.map((item: any) => {
            return {
              id: item.id,
              num: item.num,
              name: item.name,
              divide: item.divide,
              native: item.native,
              unit: item.unit,
              price: item.price,
              count: item.count,
              amount: item.amount,
            };
          }),
          completed: data.completed,
          deleted: data.deleted,
          userId: data.userId,
          billId: data.billId,
          createdAt: new Date(data.createdAt),
          updatedAt: new Date(data.updatedAt),
        },
      });
    })
  );

  await Promise.all(
    getBill().map((data) => {
      return db.bill.create({
        data: {
          id: data.id,
          title: data.title,
          hall: data.hall,
          etc: data.etc,
          totalAmount: data.totalAmount,
          items: data.items.map((item: any) => {
            return {
              id: item.id,
              num: item.num,
              name: item.name,
              divide: item.divide,
              native: item.native,
              unit: item.unit,
              price: item.price,
              count: item.count,
              amount: item.amount,
            };
          }),
          reserve: data.reserve,
          cartId: data.cartId,
          userId: data.userId,
          username: data.username,
          createdAt: new Date(data.createdAt),
          updatedAt: new Date(data.updatedAt),
        },
      });
    })
  );

  await Promise.all(
    getWedding().map((data) => {
      return db.wedding.create({ data });
    })
  );

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

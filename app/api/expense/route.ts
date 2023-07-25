import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { maskingName } from '@/libs/utils';

export async function POST(req: Request) {
  try {
    await checkAdmin();

    const {
      husbandName,
      husbandImage,
      brideName,
      brideImage,
      weddingAt,
      eventAt,
      costHusband,
      costBride,
      mealHusband,
      mealBride,
      presentHusband,
      presentBride,
      reserveHusband,
      reserveBride,
      companyHusband,
      companyBride,
      roofTopHusband,
      roofTopBride,
      ownerWomanHusband,
      ownerWomanBride,
      ownerManHusband,
      ownerManBride,
      selectHusband,
      selectBride,
      frameHusband,
      frameBride,
      dressHusband,
      dressBride,
      hairpinHusband,
      hairpinBride,
      wigHusband,
      wigBride,
      videoHusband,
      videoBride,
      etcHusband,
      etcBride,
      rentalHusband,
      rentalBride,
      swordHusband,
      swordBride,
      gloveHusband,
      gloveBride,
      bouquetHusband,
      bouquetBride,
      ceremonyHusband,
      ceremonyBride,
      playHusband,
      playBride,
      anthemHusband,
      anthemBride,
      moderatorHusband,
      moderatorBride,
      officiateHusband,
      officiateBride,
      hanbokPreHusband,
      hanbokPreBride,
      hanbokPostHusband,
      hanbokPostBride,
      meals,
      mealsPrice,
      mealsNumHusband,
      mealsNumBride,
      present: dataPresent,
      presentNumHusband,
      presentNumBride,
      presentPrice,
      reserve: dataReserve,
      reservePay,
      prePaymentHusband,
      prePaymentBride,
    }: ExpenseType = await req.json();

    const wedding = await db.wedding.create({
      data: {
        husbandName: maskingName(husbandName),
        brideName: maskingName(brideName),
        husbandImage,
        brideImage,
        weddingAt: weddingAt?.toString()!,
        eventAt,
        costHusband,
        costBride,
        mealHusband,
        mealBride,
        presentHusband,
        presentBride,
        reserveHusband,
        reserveBride,
      },
    });

    await db.company.create({
      data: {
        companyHusband,
        companyBride,
        roofTopHusband,
        roofTopBride,
        ownerWomanHusband,
        ownerWomanBride,
        ownerManHusband,
        ownerManBride,
        selectHusband,
        selectBride,
        frameHusband,
        frameBride,
        dressHusband,
        dressBride,
        hairpinHusband,
        hairpinBride,
        wigHusband,
        wigBride,
        videoHusband,
        videoBride,
        etcHusband,
        etcBride,
        weddingId: wedding.id,
      },
    });

    await db.convention.create({
      data: {
        rentalHusband,
        rentalBride,
        swordHusband,
        swordBride,
        gloveHusband,
        gloveBride,
        bouquetHusband,
        bouquetBride,
        ceremonyHusband,
        ceremonyBride,
        weddingId: wedding.id,
      },
    });

    await db.event.create({
      data: {
        playHusband,
        playBride,
        anthemHusband,
        anthemBride,
        moderatorHusband,
        moderatorBride,
        officiateHusband,
        officiateBride,
        weddingId: wedding.id,
      },
    });

    await db.hanbok.create({
      data: {
        hanbokPreHusband,
        hanbokPreBride,
        hanbokPostHusband,
        hanbokPostBride,
        weddingId: wedding.id,
      },
    });

    await db.meal.create({
      data: {
        meals,
        mealsPrice,
        mealsNumHusband,
        mealsNumBride,
        weddingId: wedding.id,
      },
    });

    await db.present.create({
      data: {
        present: dataPresent,
        presentPrice,
        presentNumHusband,
        presentNumBride,
        weddingId: wedding.id,
      },
    });

    await db.reserve.create({
      data: {
        reserve: dataReserve,
        reservePay,
        weddingId: wedding.id,
      },
    });

    await db.prepayment.create({
      data: {
        prePaymentHusband,
        prePaymentBride,
        weddingId: wedding.id,
      },
    });

    return new Response(JSON.stringify(wedding));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}

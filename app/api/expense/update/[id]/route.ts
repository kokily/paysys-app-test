import db from '@/libs/database';
import { checkAdmin } from '@/libs/session';
import { getId, maskingName } from '@/libs/utils';

export async function PUT(req: Request) {
  try {
    const id = getId(req);

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

    const wedding = await db.wedding.update({
      where: { id },
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
        updatedAt: new Date(),
      },
    });

    await db.company.update({
      where: { id },
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

    await db.convention.update({
      where: { id },
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

    await db.event.update({
      where: { id },
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

    await db.hanbok.update({
      where: { id },
      data: {
        hanbokPreHusband,
        hanbokPreBride,
        hanbokPostHusband,
        hanbokPostBride,
        weddingId: wedding.id,
      },
    });

    await db.meal.update({
      where: { id },
      data: {
        meals,
        mealsPrice,
        mealsNumHusband,
        mealsNumBride,
        weddingId: wedding.id,
      },
    });

    await db.present.update({
      where: { id },
      data: {
        present: dataPresent,
        presentPrice,
        presentNumHusband,
        presentNumBride,
        weddingId: wedding.id,
      },
    });

    await db.reserve.update({
      where: { id },
      data: {
        reserve: dataReserve,
        reservePay,
        weddingId: wedding.id,
      },
    });

    await db.prepayment.update({
      where: { id },
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

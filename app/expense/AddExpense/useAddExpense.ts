import type { ChangeEvent, SyntheticEvent } from 'react';
import { useEffect, useReducer, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { addExpenseAPI, updateExpenseAPI } from '../api';
import reducer, { dispatchExpense, initialState } from './reducer';
import { getFrontId } from '@/libs/utils';
import { readWeddingAPI } from '@/app/weddings/[id]/ReadWedding/api';

export default function useAddExpense() {
  const router = useRouter();
  const id = getFrontId(usePathname());
  const queryClient = useQueryClient();

  let reserveHusband = 0;
  let reserveBride = 0;
  let mealHusband = 0;
  let mealBride = 0;
  let presentHusband = 0;
  let presentBride = 0;

  // States
  const [startDate, setStartDate] = useState(new Date());
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    husbandName,
    brideName,
    eventAt,
    costHusband,
    costBride,
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
    present,
    presentPrice,
    presentNumHusband,
    presentNumBride,
    reserve,
    reservePay,
    prePaymentHusband,
    prePaymentBride,
  } = state;

  // Update Data Fetching
  const { data } = useQuery({
    queryKey: ['updateExpense'],
    queryFn: () => readWeddingAPI(id),
    enabled: id && id !== 'expense' ? true : false,
  });

  // Mutations
  const addExpenseMutate = useMutation(addExpenseAPI);
  const updateExpenseMutate = useMutation(updateExpenseAPI);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  const onBack = () => {
    router.back();
  };

  const onAddExpense = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (
      [
        husbandName,
        brideName,
        eventAt,
        costHusband,
        costBride,
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
        present,
        presentPrice,
        presentNumHusband,
        presentNumBride,
        reserve,
        reservePay,
        prePaymentHusband,
        prePaymentBride,
      ].includes('')
    ) {
      toast.warning('빈 칸 없이 입력해 주세요.');
      return;
    }

    // 예약금 Reserve
    switch (reserve) {
      case 'half':
        reserveHusband = reservePay / 2;
        reserveBride = reservePay / 2;
        break;
      case 'husband':
        reserveHusband = reservePay;
        reserveBride = 0;
        break;
      default:
        reserveHusband = 0;
        reserveBride = reservePay;
        break;
    }

    // 식대 Meal
    switch (meals) {
      case 'privacy':
        mealHusband = mealsPrice * mealsNumHusband;
        mealBride = mealsPrice * mealsNumBride;
        break;
      case 'husband':
        mealHusband = mealsPrice * (mealsNumHusband + mealsNumBride);
        mealBride = 0;
        break;
      case 'bride':
        mealHusband = 0;
        mealBride = mealsPrice * (mealsNumHusband + mealsNumBride);
        break;
      default:
        // 반반
        mealHusband = (mealsPrice * (mealsNumHusband + mealsNumBride)) / 2;
        mealBride = (mealsPrice * (mealsNumHusband + mealsNumBride)) / 2;
        break;
    }

    // 답례품
    switch (present) {
      case 'privacy':
        presentHusband = presentPrice * presentNumHusband;
        presentBride = presentPrice * presentNumBride;
        break;
      case 'husband':
        presentHusband = presentPrice * (presentNumHusband + presentNumBride);
        presentBride = 0;
        break;
      case 'bride':
        presentHusband = 0;
        presentBride = presentPrice * (presentNumHusband + presentNumBride);
        break;
      default:
        // 반반
        presentHusband =
          (presentPrice * (presentNumHusband + presentNumBride)) / 2;
        presentBride =
          (presentPrice * (presentNumHusband + presentNumBride)) / 2;
        break;
    }

    // 비용 계산
    // 23. 3. 부터 회계담당 요청에 따라 삭제목록 추가
    dispatch({ name: 'ceremonyHusband', value: 0 });
    dispatch({ name: 'ceremonyBride', value: 0 });
    dispatch({ name: 'playHusband', value: 0 });
    dispatch({ name: 'playBride', value: 0 });
    dispatch({ name: 'anthemHusband', value: 0 });
    dispatch({ name: 'anthemBride', value: 0 });
    dispatch({ name: 'moderatorHusband', value: 0 });
    dispatch({ name: 'moderatorBride', value: 0 });
    dispatch({ name: 'officiateHusband', value: 0 });
    dispatch({ name: 'officiateBride', value: 0 });
    dispatch({ name: 'hanbokPreHusband', value: 0 });
    dispatch({ name: 'hanbokPreBride', value: 0 });
    dispatch({ name: 'hanbokPostHusband', value: 0 });
    dispatch({ name: 'hanbokPostBride', value: 0 });

    dispatch({
      name: 'costHusband',
      value:
        rentalHusband +
        swordHusband +
        gloveHusband +
        bouquetHusband +
        companyHusband +
        roofTopHusband +
        ownerWomanHusband +
        ownerManHusband +
        selectHusband +
        frameHusband +
        dressHusband +
        hairpinHusband +
        wigHusband +
        videoHusband +
        etcHusband,
    });

    dispatch({
      name: 'costBride',
      value:
        rentalBride +
        swordBride +
        gloveBride +
        bouquetBride +
        companyBride +
        roofTopBride +
        ownerWomanBride +
        ownerManBride +
        selectBride +
        frameBride +
        dressBride +
        hairpinBride +
        wigBride +
        videoBride +
        etcBride,
    });

    if (!id) {
      // Add Expense
      await addExpenseMutate.mutateAsync(
        {
          husbandName,
          brideName,
          weddingAt: startDate.toLocaleDateString(),
          eventAt,
          costHusband,
          costBride,
          mealHusband,
          mealBride,
          presentHusband,
          presentBride,
          reserveHusband,
          reserveBride,
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
          present,
          presentPrice,
          presentNumHusband,
          presentNumBride,
          reserve,
          reservePay,
          prePaymentHusband,
          prePaymentBride,
        },
        {
          onSuccess: () => {
            toast.success('웨딩전표 저장!');
            queryClient.invalidateQueries(['weddings', 'wedding']);
            router.back();
          },
        }
      );
    } else {
      // Update Expense
      await updateExpenseMutate.mutateAsync({
        id,
        payload: {
          husbandName,
          brideName,
          weddingAt: startDate.toLocaleDateString(),
          eventAt,
          costHusband,
          costBride,
          mealHusband,
          mealBride,
          presentHusband,
          presentBride,
          reserveHusband,
          reserveBride,
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
          present,
          presentPrice,
          presentNumHusband,
          presentNumBride,
          reserve,
          reservePay,
          prePaymentHusband,
          prePaymentBride,
        },
      });
    }
  };

  useEffect(() => {
    if (data?.wedding) {
      setStartDate(new Date(data?.wedding.weddingAt));
      dispatchExpense(data, dispatch);
    }
  }, [data]);

  return {
    husbandName,
    brideName,
    eventAt,
    costHusband,
    costBride,
    mealHusband,
    mealBride,
    presentHusband,
    presentBride,
    reserveHusband,
    reserveBride,
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
    present,
    presentPrice,
    presentNumHusband,
    presentNumBride,
    reserve,
    reservePay,
    prePaymentHusband,
    prePaymentBride,
    weddingAt: startDate.toLocaleDateString(),
    setStartDate,
    onChange,
    onBack,
    onAddExpense,
    isEdit: id === 'expense' ? false : true,
  };
}

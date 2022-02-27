import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import moment from 'moment';
import 'moment/locale/ko';

const useGetDate = (date) => {
  const [chargeTime, setChargeTime] = useState('');

  /* 알림생성 날짜 계산 YYYY-MM-DDTHH:mm:ss.SSS*/
  const dayjs = require('dayjs');

  // 시간 차이에 따른 표기
  const timeForToday = (value) => {
    const createAlrimDate = String(value); // 2022-02-25T19:34:57.175422
    const nowdate = moment().format('YYYY-MM-DD HH:mm:ss');

    // YYYY-MM-DD hh:mm:ss 형식의 날짜와 날짜차이 구하기
    var valueDate = dayjs(createAlrimDate, 'YYYY-MM-DD HH:mm:ss');
    var nowDate = dayjs(nowdate, 'YYYY-MM-DD HH:mm:ss');

    valueDate.format('YYYY.MM.DD HH:mm:ss'); // 2021.10.11 10:30:25
    nowDate.format('YYYY.MM.DD HH:mm:ss'); // 2021.10.11 10:30:25

    let mDiff = nowDate.diff(valueDate, 'minute'); // 분
    let minutesDiff = mDiff - 540; // 백엔드 시간이랑 차이만큼 빼기

    if (minutesDiff < 1) return setChargeTime('방금전');
    if (minutesDiff >= 1 && minutesDiff < 60) {
      setChargeTime(`${minutesDiff}분전`);
      return;
    }

    const betweenTimeHour = Math.floor(minutesDiff / 60);
    if (minutesDiff >= 60 && betweenTimeHour < 24) {
      setChargeTime(`${betweenTimeHour}시간전`);
      return;
    }

    const betweenTimeDay = Math.floor(minutesDiff / 60 / 24);
    if (betweenTimeHour >= 24 && betweenTimeDay < 365) {
      setChargeTime(`${betweenTimeDay}일전`);
      return;
    }

    setChargeTime(`${Math.floor(betweenTimeDay / 365)}년전`);
  };

  useEffect(() => {
    timeForToday(date);
  }, []);

  return chargeTime;
};

export default useGetDate;

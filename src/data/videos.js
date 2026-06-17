const V1 = "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-f338d540-9e07-413b-b6d9-6588e5363d80-1_qj7JfiwI.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS1mMzM4ZDU0MC05ZTA3LTQxM2ItYjZkOS02NTg4ZTUzNjNkODAtMV9xajdKZml3SS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxNzIwMTMyLCJleHAiOjE4MTMyNTYxMzJ9.TmDJYk4wVLUq_VafQBhaELG3Rj1YzfdvU968KfVvTO4";
const V2 = "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-20fe131f-5399-4e09-a404-a70f8d3ed0c0_PBf2TKN8.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS0yMGZlMTMxZi01Mzk5LTRlMDktYTQwNC1hNzBmOGQzZWQwYzBfUEJmMlRLTjgubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTM3MTc1NCwiZXhwIjoxODEyOTA3NzU0fQ.rIkhDhz_biFNK2PCABjwyCnnZjENpVdRSSUZDlKtgoc";

const CHANNEL_AVATARS = {
  dietforever: "https://picsum.photos/seed/dietforever-body/160/160",
  idollist: "https://loremflickr.com/160/160/cat?lock=7101",
  pyeonmat: "https://picsum.photos/seed/pyeonmat-landscape/160/160",
  kamdongcollector: "https://loremflickr.com/160/160/cat?lock=7103",
  taeho: "https://picsum.photos/seed/taeho-landscape/160/160",
  haeun: "https://loremflickr.com/160/160/cat?lock=7105",
};

const DOG_SHORT_COMMENTS = [
  "ㅠㅠㅠㅠㅠ", "눈물 난다 진짜", "너무 귀여워ㅠ", "아가야 행복해야 해", "오늘 꼭 안아줘야지", "마음이 너무 아프다", "꼬리 흔드는 거 봐ㅠ", "우리 애 보고 싶다",
  "이건 못 참지ㅠㅠ", "강아지는 천사야", "퇴근하고 바로 산책 간다", "왜 나를 울려요ㅠ", "표정이 너무 순해", "미안해 우리 아가", "짧게라도 놀아줘야겠다", "눈빛에서 사랑이 보여",
  "보고 또 우는 중", "아 진짜 슬프다", "너무 착해서 더 눈물남", "강아지 시간은 빠르대요", "오늘이 제일 소중하다", "저 작은 발 너무 귀여워", "현관에서 기다리지 마ㅠ", "우리 집도 똑같아요",
  "ㅠㅠㅠㅠ 마음 찢어짐", "한 번만 더 안아볼걸", "산책 가자는 말 해줘야지", "강아지 키우면 공감됨", "사랑만 받아 아가야", "끝까지 못 보겠어요", "지금 옆에서 자고 있는데 울컥", "나중으로 미루지 말아야지",
  "너무 귀엽고 너무 슬퍼", "저 꼬리가 반칙임", "우리 댕댕이 최고", "퇴근길에 간식 사간다", "오늘은 폰 내려놓고 놀아줄게", "기다렸을 생각에 미안하다", "건강하게 오래 살아줘", "강아지는 우리만 보잖아",
  "댓글 보다가 또 울음", "무지개다리 얘기 너무 슬퍼", "아가들은 다 행복했으면", "저 눈을 어떻게 외면해ㅠ", "짧은 산책도 좋아하더라", "바쁘다는 말이 핑계였네", "오늘부터 더 잘할게", "강아지 냄새 맡고 싶다",
  "세상에서 제일 순한 눈", "우리 애도 현관에서 기다려요", "귀여워서 심장 아파", "진짜 가족 맞아요", "ㅠㅠ 보고 싶어", "산책 두 번 간다 오늘", "이 영상 저장해둬야지", "괜히 미안해서 쓰다듬는 중",
  "시간아 천천히 가줘", "오래오래 곁에 있어줘", "강아지한텐 우리가 전부", "울면서 좋아요 누름", "사랑해 우리 강아지", "지금 만나러 갑니다", "다시는 미루지 않을게", "모든 강아지 행복하자",
];

const DOG_COMMENT_LIKES = [0, 3, 11, 27, 54, 89, 132, 207, 418, 763, 1240, 6, 42, 315, 18, 1567];
const DOG_REPLY_TEXTS = [
  "저도 같은 마음이에요ㅠㅠ",
  "오늘은 꼭 같이 산책해요",
  "아이도 그 마음을 다 알 거예요",
  "이 댓글 보고 또 울었네요",
  "우리 모두 있을 때 더 잘해줘요",
  "짧은 시간이라도 정말 좋아하더라고요",
];

const DOG_EXTRA_COMMENTS = DOG_SHORT_COMMENTS.map((text, index) => {
  const replies = index % 3 === 0
    ? [{
        id: `r${index + 1}_1`,
        user: `puppy_reply_${index + 1}`,
        avatar: "",
        text: DOG_REPLY_TEXTS[index % DOG_REPLY_TEXTS.length],
        likes: DOG_COMMENT_LIKES[(index + 5) % DOG_COMMENT_LIKES.length],
        time: `${Math.max(1, 9 - Math.floor(index / 8))}시간 전`,
      }]
    : [];

  if (index % 11 === 0) {
    replies.push({
      id: `r${index + 1}_2`,
      user: `warm_reply_${index + 1}`,
      avatar: "",
      text: "진짜 공감합니다 마음이 먹먹해요ㅠ",
      likes: DOG_COMMENT_LIKES[(index + 9) % DOG_COMMENT_LIKES.length],
      time: `${Math.max(1, 8 - Math.floor(index / 9))}시간 전`,
    });
  }

  return {
    id: `c${index + 37}`,
    user: `doglover_${String(index + 37).padStart(3, "0")}`,
    avatar: "",
    text,
    likes: DOG_COMMENT_LIKES[index % DOG_COMMENT_LIKES.length],
    time: `${Math.max(1, 12 - Math.floor(index / 6))}시간 전`,
    replies,
  };
});

export const videos = [
  {
    id: "1",
    videoUrl: V1,
    channel: {
      name: "dietforever",
      handle: "@dietforever",
      avatarUrl: CHANNEL_AVATARS.dietforever,
      verified: false,
    },
    title: "3개월 만에 -12kg 거울샷 전후 비교 🪞 #다이어트 #전후비교 #바디체인지 #다이어트성공",
    music: "3개월 식단+운동 루틴 전격 공개｜감량 과정 풀영상",
    likes: 2300,
    comments: 542,
    shares: 318,
    comments_data: [
      { id: "c0a", user: "qbnxvr01", avatar: "", text: "1빠다", likes: 0, time: "5일 전", replies: [] },
      { id: "c0b", user: "zlwxnq02", avatar: "", text: "2빠는 못참지", likes: 0, time: "5일 전", replies: [] },
      { id: "c1", user: "body_goal_j", avatar: "", text: "다이어트 어떻게 하셨어요?? 식단 위주인가요 운동 위주인가요? 3개월에 이 정도면 진짜 대단하다", likes: 487, time: "5일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "식단 70% 운동 30% 정도였어요! 탄수화물 줄이고 단백질 위주로 먹었어요 😊", likes: 312, time: "5일 전" },
          { id: "r2", user: "slim_start_k", avatar: "", text: "저도 식단이 제일 중요하다고 느꼈어요 운동만 해선 한계가 있더라고요", likes: 89, time: "4일 전" },
        ],
      },
      { id: "c2", user: "wannabe_fit99", avatar: "", text: "뭐 드시고 어떤 운동하셨어요? 저도 3개월째인데 5kg밖에 못 뺐거든요ㅜㅜ", likes: 356, time: "5일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "하루 1500kcal 지키고 유산소 30분+근력 30분 매일 했어요! 식단이 진짜 핵심이에요", likes: 234, time: "4일 전" },
          { id: "r2", user: "health_seeker_m", avatar: "", text: "5kg도 엄청난 거예요!! 꾸준히 하시면 분명 더 빠질 거예요 🙌", likes: 67, time: "4일 전" },
        ],
      },
      { id: "c3", user: "envy_real_88", avatar: "", text: "개부럽다 진짜로... 나는 맨날 작심삼일인데 3개월 동안 어떻게 버티셨어요?", likes: 423, time: "4일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "저도 중간에 포기할 뻔 여러 번 했는데 전 사진 보면서 버텼어요ㅎㅎ", likes: 178, time: "4일 전" },
        ],
      },
      { id: "c4", user: "anon_troll_1", avatar: "", text: "빼도 별로네 ㅋㅋ 얼굴이랑 골격이 문제인데 몸무게 빼봤자 크게 달라지는 게 없음", likes: 12, time: "4일 전",
        replies: [
          { id: "r1", user: "supportive_fan_a", avatar: "", text: "본인 얼굴 먼저 보고 오세요^^", likes: 498, time: "4일 전" },
          { id: "r2", user: "diet_cheer_up", avatar: "", text: "저렇게 댓글 다는 사람이 더 별로임 신고하고 갑니다", likes: 367, time: "3일 전" },
          { id: "r3", user: "anon_troll_1", avatar: "", text: "사실 말하는 게 나쁜 건 아니잖아요", likes: 4, time: "3일 전" },
          { id: "r4", user: "real_opinion_k", avatar: "", text: "사실이 아닌데요. 차단 박고 갑니다", likes: 289, time: "2일 전" },
        ],
      },
      { id: "c5", user: "hater_anon_2", avatar: "", text: "빼기 전에는 씹돼지네 ㅋㅋ 저 몸으로 어떻게 생활했지", likes: 7, time: "4일 전",
        replies: [
          { id: "r1", user: "protect_creator_1", avatar: "", text: "이런 댓글 다는 사람이 진짜 문제임 신고합니다", likes: 445, time: "4일 전" },
          { id: "r2", user: "kind_support_b", avatar: "", text: "노력해서 빼신 분한테 이게 무슨 말이에요 인성 좀 봐주세요", likes: 387, time: "3일 전" },
          { id: "r3", user: "just_report_it", avatar: "", text: "악플에 반응 주지 말고 신고만 해요 알고리즘에 뜨니까", likes: 213, time: "3일 전" },
        ],
      },
      { id: "c6", user: "workout_diary_p", avatar: "", text: "운동 뭐 하셨어요? 저 필라테스 다니는데 살이 잘 안 빠져서요ㅜ 유산소를 추가해야 하나", likes: 178, time: "3일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "저는 러닝 30분 + 홈트 위주였어요! 필라테스에 유산소 추가하면 확실히 달라질 거예요 💪", likes: 134, time: "3일 전" },
          { id: "r2", user: "pilates_queen_s", avatar: "", text: "필라테스는 체형 교정은 되는데 칼로리 소모가 적어서 유산소 병행이 거의 필수예요", likes: 89, time: "3일 전" },
        ],
      },
      { id: "c7", user: "diet_start_today", avatar: "", text: "이 영상 보고 저도 오늘부터 시작합니다 3개월 후 댓글 달러 올게요!!", likes: 312, time: "3일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "응원합니다!! 꼭 3개월 후에 인증해요 기다릴게요 😄", likes: 145, time: "3일 전" },
          { id: "r2", user: "together_we_diet", avatar: "", text: "저도 같이 시작해요! 서로 응원해요 💪", likes: 67, time: "2일 전" },
        ],
      },
      { id: "c8", user: "skeptic_viewer", avatar: "", text: "3개월에 12kg이 진짜임? 건강하게 빠진 거 맞아요? 너무 빨리 빠지면 요요 온다던데", likes: 234, time: "3일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "저도 걱정돼서 주 1회 치팅데이 넣고 근손실 최소화했어요! 지금 6개월째 유지 중이에요 😊", likes: 198, time: "3일 전" },
          { id: "r2", user: "nutrition_info_k", avatar: "", text: "처음엔 수분 빠지는 게 많아서 초반에 빠르게 내려가는 경우가 많아요", likes: 78, time: "2일 전" },
        ],
      },
      { id: "c9", user: "before_after_fan", avatar: "", text: "전후 차이 실화냐 얼굴도 작아지고 라인이 완전히 달라졌다 개부럽다ㅜㅜ", likes: 389, time: "2일 전", replies: [] },
      { id: "c10", user: "harsh_comment_x", avatar: "", text: "빼도 아직 많이 남았는데 벌써 자랑하나 ㅋ 목표 몸무게가 뭔데요", likes: 9, time: "2일 전",
        replies: [
          { id: "r1", user: "real_support_c", avatar: "", text: "12kg이나 빼신 분한테 이게 무슨 댓글이에요 대단한 성과인데", likes: 412, time: "2일 전" },
          { id: "r2", user: "stand_up_d", avatar: "", text: "저렇게 살면 본인이 더 불행한 거임 그냥 신고하고 무시해요", likes: 267, time: "2일 전" },
        ],
      },
      { id: "c11", user: "meal_plan_q", avatar: "", text: "하루 식단 공유해주실 수 있어요? 아침 점심 저녁 뭐 드셨는지 너무 궁금해요", likes: 423, time: "2일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "아침 단백질 쉐이크, 점심 닭가슴살 샐러드, 저녁 고구마+달걀 위주였어요! 간식은 아몬드나 방울토마토", likes: 356, time: "2일 전" },
          { id: "r2", user: "copycat_diet_r", avatar: "", text: "스크린샷 찍었어요 감사해요!!!! 저도 이대로 해볼게요", likes: 89, time: "1일 전" },
        ],
      },
      { id: "c12", user: "body_positive_e", avatar: "", text: "노력이 대단하세요 정말! 3개월 동안 얼마나 힘드셨을지 ㅠ 응원합니다", likes: 278, time: "2일 전", replies: [] },
      { id: "c13", user: "weight_question_f", avatar: "", text: "시작 몸무게가 어떻게 됐어요? 최종은요? 공유 가능하면요!", likes: 187, time: "1일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "76kg → 64kg이었어요! 키는 163cm이고요 😊", likes: 234, time: "1일 전" },
          { id: "r2", user: "same_stats_g", avatar: "", text: "저랑 시작 몸무게 비슷해요 진짜 희망이 생겼어요 감사해요ㅠ", likes: 145, time: "1일 전" },
        ],
      },
      { id: "c14", user: "calorie_nerd_h", avatar: "", text: "하루 몇 칼로리 드셨어요? 기초대사량 계산해서 맞추셨나요?", likes: 145, time: "1일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "기초대사량 1400kcal 정도인데 1500 선에서 먹었어요! 너무 굶으면 근손실 오더라고요", likes: 189, time: "1일 전" },
        ],
      },
      { id: "c15", user: "quick_result_i", avatar: "", text: "헬스장 다니신 건가요 홈트인가요? 기구 없어도 할 수 있어요?", likes: 267, time: "1일 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "저 완전 홈트예요!! 유튜브 보면서 맨몸운동 위주로 했어요 기구 거의 없어도 충분해요 💪", likes: 312, time: "1일 전" },
          { id: "r2", user: "homegym_lover_j", avatar: "", text: "홈트로 이렇게까지 가능한 거 보고 저도 다시 시작해야겠어요", likes: 78, time: "23시간 전" },
        ],
      },
      { id: "c16", user: "troll_anon_3", avatar: "", text: "요요 올 거임 두고 봐라 ㅋ 어차피 원래대로 돌아감", likes: 5, time: "1일 전",
        replies: [
          { id: "r1", user: "ignore_trolls_k", avatar: "", text: "6개월 유지 중이시라고 하셨는데요? 가서 공부하고 오세요", likes: 387, time: "23시간 전" },
          { id: "r2", user: "report_please_l", avatar: "", text: "신고 누르고 갑니다 본인 인생이나 챙기세요", likes: 234, time: "23시간 전" },
        ],
      },
      { id: "c17", user: "success_inspire_m", avatar: "", text: "이 영상 보고 저도 할 수 있겠다는 자신감이 생겼어요 감사해요 정말", likes: 198, time: "23시간 전", replies: [] },
      { id: "c18", user: "diet_tip_share_n", avatar: "", text: "물 하루에 얼마나 드셨어요? 물이 다이어트에 도움이 많이 된다던데", likes: 156, time: "22시간 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "2L 이상 마시려고 했어요! 식전에 한 컵 마시면 포만감에도 도움 돼요", likes: 134, time: "22시간 전" },
        ],
      },
      { id: "c19", user: "diet_reality_o", avatar: "", text: "다이어트 하면서 제일 힘들었던 게 뭐예요? 저는 스트레스성 폭식이 제일 문제라서요ㅜ", likes: 312, time: "21시간 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "저도 야식 욕구가 제일 힘들었어요ㅠ 밤에 배고프면 물이나 저칼로리 젤리로 버텼어요", likes: 223, time: "20시간 전" },
          { id: "r2", user: "stress_diet_p", avatar: "", text: "스트레스 폭식은 공감돼요ㅜ 저도 그게 제일 관리가 안 됨", likes: 89, time: "20시간 전" },
        ],
      },
      { id: "c20", user: "timeline_curious_q", avatar: "", text: "처음 한 달은 얼마나 빠지셨어요? 초반에 정체기 없었나요?", likes: 189, time: "20시간 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "첫 달에 5kg 빠지고 2달차에 3kg, 3달차에 4kg이었어요! 2달차 정체기가 제일 힘들었어요", likes: 167, time: "19시간 전" },
        ],
      },
      { id: "c21", user: "before_after_real", avatar: "", text: "전후 사진 보면서 눈물날 것 같아요 저도 저렇게 되고 싶어서 오늘부터 다시 도전해요", likes: 234, time: "18시간 전", replies: [] },
      { id: "c22", user: "supplement_ask_r", avatar: "", text: "보조제나 다이어트 약은 따로 드셨어요? 아니면 순수 식단+운동만요?", likes: 145, time: "17시간 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "단백질 쉐이크 외에는 아무것도 안 먹었어요! 약 없이 순수 식단+운동만이에요 😊", likes: 198, time: "16시간 전" },
          { id: "r2", user: "clean_diet_s", avatar: "", text: "약 없이 이 정도면 진짜 대단한 거예요 의지력 존경합니다", likes: 112, time: "16시간 전" },
        ],
      },
      { id: "c23", user: "jealous_but_kind", avatar: "", text: "개부럽다ㅜㅜ 저도 저렇게 빠지고 싶어요 의지력이 진짜 부러워요 저는 3일도 못 버티는데", likes: 267, time: "14시간 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "저도 처음엔 그랬어요ㅠ 3일이 제일 힘들어요 그것만 넘기면 적응돼요 화이팅!", likes: 178, time: "14시간 전" },
        ],
      },
      { id: "c24", user: "cheer_squad_w", avatar: "", text: "악플 무시하고 계속 올려주세요!! 진짜 도움받는 사람이 훨씬 더 많아요 응원합니다 💪", likes: 356, time: "11시간 전", replies: [] },
      { id: "c25", user: "night_snack_prob", avatar: "", text: "야식 욕구는 어떻게 참으셨어요 저는 그게 진짜 안 돼서ㅜㅜ", likes: 234, time: "7시간 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "저도 제일 힘든 부분이에요ㅠ 잠들기 전에 양치를 바로 해버리면 먹기가 귀찮아져요ㅎㅎ", likes: 178, time: "6시간 전" },
          { id: "r2", user: "nightfight_diet", avatar: "", text: "양치 꿀팁 진짜예요 저도 이걸로 버텨요", likes: 134, time: "6시간 전" },
        ],
      },
      { id: "c26", user: "subscribe_now", avatar: "", text: "구독하고 갑니다 앞으로도 꾸준히 올려주세요 응원해요!!", likes: 134, time: "45분 전", replies: [] },
      { id: "c27", user: "last_viewer", avatar: "", text: "저도 오늘부터 다시 시작해요 이 영상이 저한테 용기 줬어요 감사합니다 🙏", likes: 98, time: "20분 전",
        replies: [
          { id: "r1", user: "dietforever", avatar: "", text: "화이팅이에요!!! 꼭 성공하길 응원할게요 🔥", likes: 67, time: "5분 전" },
        ],
      },
    ],
  },
  {
    id: "2",
    videoUrl: V2,
    channel: {
      name: "편맛",
      handle: "@pyeonmat",
      avatarUrl: CHANNEL_AVATARS.pyeonmat,
      verified: false,
    },
    title: "외국인들이 이걸 진짜 좋아한다고? 🏪 #편의점 #편맛 #koreanfood #불닭볶음면",
    music: "외국인이 뽑은 한국 편의점 음식 TOP 10",
    likes: 31800,
    comments: 634,
    shares: 1203,
    comments_data: [
      { id: "c0a", user: "qbnxvrmz", avatar: "", text: "1빠다ㅋ", likes: 0, time: "3일 전", replies: [] },
      { id: "c0b", user: "zlwxnqbv", avatar: "", text: "2빠는 못참지", likes: 0, time: "3일 전", replies: [] },
      { id: "c1", user: "bqxvkrtz", avatar: "", text: "숏츠 보다가 발견함 알고리즘 잘 만났다 오늘 편의점 각이다 🏪", likes: 456, time: "3일 전",
        replies: [
          { id: "r1", user: "nxqvrmzk", avatar: "", text: "ㅇㅈ 저도 오늘 꼭 가야겠음", likes: 56, time: "3일 전" },
        ],
      },
      { id: "c2", user: "fxnqvbzm", avatar: "", text: "외국인 친구한테 불닭볶음면 줬더니 눈물 흘리면서도 다 먹더라고 중독성이 ㄹㅇ 있나봄", likes: 289, time: "3일 전",
        replies: [
          { id: "r1", user: "pyeonmat", avatar: "", text: "불닭 중독성은 진짜 세계 공통인 것 같아요 맵찔이도 결국 다 먹게 됨", likes: 78, time: "3일 전" },
          { id: "r2", user: "gxnqvbzm", avatar: "", text: "마요네즈 섞으면 덜 맵고 더 맛있는데 그것도 알려줘요 꿀팁임", likes: 34, time: "2일 전" },
        ],
      },
      { id: "c3", user: "wkxnqvzm", avatar: "", text: "I tried the buldak + mayo combo after seeing this and I genuinely can't go back 😭😭 what have you done to me", likes: 523, time: "2일 전",
        replies: [
          { id: "r1", user: "pyeonmat", avatar: "", text: "Welcome to the mayo buldak club 😂 there's no going back!!", likes: 89, time: "2일 전" },
          { id: "r2", user: "rvkzmxnq", avatar: "", text: "SAME I thought it was weird but now I put mayo on everything Korean food", likes: 67, time: "2일 전" },
        ],
      },
      { id: "c4", user: "jpxnqvzk", avatar: "", text: "꼬북칩 + 바나나우유 조합 ㄹㅇ 신이 만든 거 맞음😭😭 짭짤함이랑 달달함이 완벽하게 맞아 레알", likes: 445, time: "2일 전",
        replies: [
          { id: "r1", user: "mxbqvnzk", avatar: "", text: "이거 외국인들한테 알려주면 진짜 충격받음", likes: 78, time: "2일 전" },
        ],
      },
      { id: "c5", user: "lxqnvzmb", avatar: "", text: "Visited Korea last month and ate at convenience stores every single day. The tuna mayo triangle kimbap changed my life I'm not joking 🥹", likes: 367, time: "1일 전",
        replies: [
          { id: "r1", user: "hbxqvnzm", avatar: "", text: "Same experience here! I went back to the same GS25 like 4 times in one day 😂", likes: 89, time: "1일 전" },
          { id: "r2", user: "pyeonmat", avatar: "", text: "That's the spirit!! 😄 참치마요 삼각김밥 is iconic for a reason", likes: 45, time: "23시간 전" },
        ],
      },
      { id: "c6", user: "txqnvzbm", avatar: "", text: "참치마요 삼각김밥에 마요네즈 더 뿌려서 포카칩이랑 같이 먹으면 ㄹㅇ 편의점 신이 만든 작품인 것 같음😂", likes: 234, time: "1일 전", replies: [] },
      { id: "c7", user: "pnxqvzbm", avatar: "", text: "이 채널 왜 이제 알았지 구독 박고 갑니다 🔥 편의점 꿀조합 영상 더 올려줘요", likes: 178, time: "1일 전",
        replies: [
          { id: "r1", user: "pyeonmat", avatar: "", text: "감사합니다!! 꿀조합 시리즈 계속 올릴게요 🥹", likes: 34, time: "23시간 전" },
        ],
      },
      { id: "c8", user: "kbxqvnzm", avatar: "", text: "바나나우유는 ㄹㅇ 외국인들이 한국 오면 꼭 사 가는 1위라던데 납득이 됨 맛이 너무 독보적이잖아", likes: 312, time: "23시간 전",
        replies: [
          { id: "r1", user: "dqxvnzbm", avatar: "", text: "바나나우유 + 꼬북칩 세트로 사 가야 진짜 한국 편의점 경험한 거죠", likes: 89, time: "22시간 전" },
        ],
      },
      { id: "c9", user: "wqxvnzbm", avatar: "", text: "Showed my friends the banana milk + kkobuk chip combo and now they're all obsessed 😂 you're creating an army", likes: 289, time: "22시간 전",
        replies: [
          { id: "r1", user: "pyeonmat", avatar: "", text: "The Korean convenience store army grows stronger every day 😄🔥", likes: 56, time: "21시간 전" },
        ],
      },
      { id: "c10", user: "rzxqvnbm", avatar: "", text: "편의점 알바하면서 외국인 손님들이 제일 많이 사가는 거 불닭이랑 바나나우유예요 꼬북칩 어디 있냐고 물어보는 분들도 많고", likes: 345, time: "21시간 전",
        replies: [
          { id: "r1", user: "xmqvbnzk", avatar: "", text: "ㅇㅈ 저도 그래요 포카칩도 많이 사 가던데", likes: 67, time: "20시간 전" },
          { id: "r2", user: "qvnzbmxk", avatar: "", text: "That's me 😂 I ask every convenience store worker where the kkobuk chip is", likes: 89, time: "20시간 전" },
        ],
      },
      { id: "c11", user: "bnxqvzmk", avatar: "", text: "꼬북칩 순살이랑 바나나우유가 ㄹㅇ 레전드 조합인데 오리지널이랑은 또 맛이 다름 다 각자 매력 있는 것 같기도 하고", likes: 89, time: "19시간 전", replies: [] },
      { id: "c12", user: "vxqbnzmk", avatar: "", text: "韓国のコンビニ最高すぎる😭 バナナ牛乳とくぼくチップは絶対セット！また行きたい", likes: 156, time: "18시간 전",
        replies: [
          { id: "r1", user: "wzqxnbvm", avatar: "", text: "일본에서도 보시는군요 또 와요!!🥹", likes: 23, time: "17시간 전" },
        ],
      },
      { id: "c13", user: "pqxvnzbm", avatar: "", text: "불닭볶음면 끓이고 마요네즈 + 치즈 넣으면 ㄹㅇ 지옥인데 천국임 😂 외국인들이 이 조합 알면 기절함", likes: 212, time: "17시간 전", replies: [] },
      { id: "c14", user: "bqxvnzmk", avatar: "", text: "편의점 4대 천왕: 1)불닭+마요+치즈 2)꼬북칩+바나나우유 3)참치마요+포카칩 4)핫바+컵라면국물 이거 ㄹㅇ 진리임", likes: 478, time: "16시간 전",
        replies: [
          { id: "r1", user: "xqvbnzmk", avatar: "", text: "스크린샷 찍었습니다 감사합니다", likes: 67, time: "15시간 전" },
          { id: "r2", user: "znbxqvmk", avatar: "", text: "Saving this comment before my Korea trip!! This is my official guide 🔥", likes: 45, time: "14시간 전" },
        ],
      },
      { id: "c15", user: "vnbxqzmk", avatar: "", text: "미국 살면서 제일 그리운 게 한국 편의점이에요ㅜㅜ 바나나우유 하나에 꼬북칩 먹던 그 느낌 이런 영상 보면 눈물 날 것 같음", likes: 234, time: "14시간 전",
        replies: [
          { id: "r1", user: "qxbnvzmk", avatar: "", text: "저도 해외 있을 때 제일 생각난 게 편의점이에요 한국 편의점 세계 최고임", likes: 45, time: "13시간 전" },
        ],
      },
      { id: "c16", user: "bxnqvzmk", avatar: "", text: "I'm planning a Korea trip purely to eat at convenience stores after watching this channel 😂 this is not a joke", likes: 189, time: "13시간 전",
        replies: [
          { id: "r1", user: "dxbqvnzm", avatar: "", text: "Same!! I've already booked flights lol the content is too powerful", likes: 56, time: "12시간 전" },
        ],
      },
      { id: "c17", user: "rxnqbvzm", avatar: "", text: "불닭볶음면 처음 먹는 외국인 리액션 영상 보면 그러다가 중독돼서 계속 먹는 거 ㄹㅇ 공감됨", likes: 145, time: "11시간 전",
        replies: [
          { id: "r1", user: "hxnqbvzm", avatar: "", text: "그 영상들 진짜 힐링임 처음에 얼굴 붉어지다가 또 먹는 거 너무 웃김", likes: 34, time: "10시간 전" },
        ],
      },
      { id: "c18", user: "mxnqbvzm", avatar: "", text: "새벽 2시 편의점 야식: 참치마요 삼각김밥 + 포카칩 + 바나나우유. 이게 인생인 것 같음😭", likes: 356, time: "9시간 전", replies: [] },
      { id: "c19", user: "fxnqbvzm", avatar: "", text: "Singapore has Korean convenience store snacks now and the prices are like 3x more but I still buy them 💀 the addiction is real", likes: 223, time: "8시간 전",
        replies: [
          { id: "r1", user: "gxnqbvzm", avatar: "", text: "ㄹㅇ 해외에서 한국 스낵 가격 보면 눈물 나는데 그래도 사게 됨", likes: 45, time: "7시간 전" },
        ],
      },
      { id: "c20", user: "wxnqbvzm", avatar: "", text: "편의점 마요네즈 활용법: 삼각김밥에, 핫도그에, 불닭에, 포카칩에... 마요 없으면 편의점이 아닌 것 같기도 하고", likes: 178, time: "7시간 전",
        replies: [
          { id: "r1", user: "bxnqvzrm", avatar: "", text: "마요네즈는 편의점의 MSG임 ㄹㅇ 없으면 맛이 반토막", likes: 34, time: "6시간 전" },
        ],
      },
      { id: "c21", user: "kxnqvzbm", avatar: "", text: "외국인 친구한테 포카칩 봉지에 삼각김밥 부숴서 같이 먹는 거 알려줬더니 처음엔 경악하다가 지금은 한국 오면 꼭 한다고 함", likes: 267, time: "5시간 전", replies: [] },
      { id: "c22", user: "lxnqvzbm", avatar: "", text: "I tried every single combo mentioned in this video and the pocachip + tuna mayo triangle is genuinely the best thing I've ever eaten 🥹🥹", likes: 145, time: "4시간 전",
        replies: [
          { id: "r1", user: "pyeonmat", avatar: "", text: "That combo is truly iconic!! Glad you discovered it 😄🙌", likes: 23, time: "3시간 전" },
        ],
      },
      { id: "c23", user: "sxnqkbvz2", avatar: "", text: "꼬북칩을 바나나우유에 찍어먹는 거 해보셨어요? 그냥 곁들이는 것보다 찍어먹으면 ㄹㅇ 다른 맛인 것 같기도 하고", likes: 289, time: "3시간 전",
        replies: [
          { id: "r1", user: "mxqvtzkn2", avatar: "", text: "찍어먹는다는 생각을 못 했어요 오늘 퇴근하고 해봐야겠다", likes: 23, time: "2시간 전" },
          { id: "r2", user: "bvplwxnq2", avatar: "", text: "just tried this and my life will never be the same 😭 why did nobody tell me earlier", likes: 34, time: "1시간 전" },
        ],
      },
      { id: "c24", user: "kzxqrvnm2", avatar: "", text: "비 오는 날 새벽에 편의점에서 바나나우유 하나 들고 서서 먹는 그 감성... 이걸 외국인들이 알게 되면 ㄹㅇ 한국 살고 싶어할 거임", likes: 345, time: "2시간 전", replies: [] },
      { id: "c25", user: "jnxqvmkb2", avatar: "", text: "일본에 살고 있는데 일본 편의점도 좋지만 한국 편의점 불닭이랑 꼬북칩은 ㄹㅇ 그리움ㅜㅜ 직구로 사먹고 있어요", likes: 4, time: "1시간 전",
        replies: [
          { id: "r1", user: "wqxnzbvm2", avatar: "", text: "배송비 감당하면서도 사게 됨 중독인 것 같기도 하고", likes: 2, time: "30분 전" },
        ],
      },
    ],
  },
  {
    id: "3",
    videoUrl: "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-f338d540-9e07-413b-b6d9-6588e5363d80-1_qj7JfiwI.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS1mMzM4ZDU0MC05ZTA3LTQxM2ItYjZkOS02NTg4ZTUzNjNkODAtMV9xajdKZml3SS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzgyMzEyLCJleHAiOjE4MTI5MTgzMTJ9.6PieRTLrgHJlWCodD6Q3BO1YKmXJCo5HCllobeEYtpw",
    channel: { name: "감동집합소", handle: "@kamdongcollector", avatarUrl: CHANNEL_AVATARS.kamdongcollector, verified: false },
    title: "바쁘다는 이유로 자꾸 미뤘던 산책, 강아지는 언제나 우리만 기다리고 있었습니다 🐶 #강아지 #반려견 #감동영상 #가족",
    music: "강아지가 평생 기억하는 보호자의 행동 7가지",
    likes: 12800, comments: 100, shares: 742,
    comments_data: [
      { id: "c1", user: "monglove92", avatar: "", text: "꼬리 흔들면서 기다리는 모습이 너무 귀여운데 왜 이렇게 마음이 아프지ㅠ 오늘은 퇴근하자마자 산책부터 나가야겠다", likes: 2843, time: "4일 전", replies: [
        { id: "r1", user: "happy_dogday", avatar: "", text: "저도 이 댓글 보고 야근 끝나고 짧게라도 다녀왔어요 표정이 바로 밝아지더라고요", likes: 423, time: "4일 전" },
      ] },
      { id: "c2", user: "officeworker_k", avatar: "", text: "아침 일찍 나가서 밤늦게 들어오니까 밥이랑 물만 챙겨주고 잘 돌봤다고 생각했는데 이 영상 보니 너무 미안하다", likes: 1987, time: "4일 전", replies: [
        { id: "r1", user: "dogmom_17", avatar: "", text: "먹을 것보다 같이 있는 시간을 더 기다렸던 것 같아요 저도 많이 반성 중이에요", likes: 311, time: "3일 전" },
      ] },
      { id: "c3", user: "coco_is_family", avatar: "", text: "강아지는 하루 종일 우리가 돌아오는 순간만 기다린다는 말이 제일 슬픔... 우리는 세상에 볼 게 많지만 아이들 세상엔 우리가 전부잖아", likes: 4120, time: "4일 전", replies: [] },
      { id: "c4", user: "minji_daily", avatar: "", text: "너무 귀여워서 웃다가 마지막에 울었어요 저 조그만 발로 현관 앞에서 기다렸을 생각하니 마음이 무너짐", likes: 1456, time: "3일 전", replies: [] },
      { id: "c5", user: "latewalk", avatar: "", text: "취업 준비할 때 정신없다는 이유로 산책을 계속 미뤘는데 어느 날 갑자기 아이가 아파졌어요 그때 같이 못 걸었던 시간이 아직도 후회돼요", likes: 2678, time: "3일 전", replies: [
        { id: "r1", user: "warmhug_u", avatar: "", text: "그래도 함께했던 모든 순간에 사랑받았다는 건 분명히 알았을 거예요 너무 자책하지 마세요", likes: 689, time: "3일 전" },
      ] },
      { id: "c6", user: "bbo_family", avatar: "", text: "우리 뽀도 제가 가방만 들면 출근하는 줄 알고 표정이 시무룩해져요ㅠ 주말에는 무조건 같이 있어줘야겠음", likes: 734, time: "3일 전", replies: [] },
      { id: "c7", user: "rainbow_bori", avatar: "", text: "바쁘다는 핑계로 잘 못 챙겨줬는데 어느 날 갑자기 보리가 무지개다리를 건넜어요 마지막 산책이 언제였는지도 선명하지 않아서 몇 년이 지나도 미안합니다", likes: 5912, time: "3일 전", replies: [
        { id: "r1", user: "remember_bori", avatar: "", text: "보리는 미안했던 날보다 사랑받았던 날을 훨씬 많이 기억하고 있을 거예요 그곳에서는 매일 신나게 뛰고 있길", likes: 1204, time: "2일 전" },
        { id: "r2", user: "skybridge", avatar: "", text: "이 댓글 읽고 같이 울었어요 저도 같은 후회가 있어서 너무 이해됩니다", likes: 478, time: "2일 전" },
      ] },
      { id: "c8", user: "jellybean_00", avatar: "", text: "강아지 눈이 어떻게 저렇게 맑지 진짜 너무너무 귀엽다ㅠ 사랑만 주고 싶은 얼굴", likes: 923, time: "3일 전", replies: [] },
      { id: "c9", user: "dad_and_dog", avatar: "", text: "아버지가 매일 강아지 산책시키는 걸 귀찮아하시는 줄 알았는데 본인이 아픈 날에도 나가시더라고요 가족을 챙기는 일이었던 거였음", likes: 1834, time: "2일 전", replies: [] },
      { id: "c10", user: "nightshift_nurse", avatar: "", text: "교대근무 때문에 생활이 엉망이라 아이를 제대로 못 챙기는 날이 많아요 퇴근하면 피곤해도 10분은 온전히 안아줘야겠어요", likes: 1145, time: "2일 전", replies: [
        { id: "r1", user: "nurse_puppy", avatar: "", text: "같은 교대근무자라 공감해요 짧아도 눈 맞추고 놀아주는 시간이 정말 소중하더라고요", likes: 205, time: "2일 전" },
      ] },
      { id: "c11", user: "cookie_2013", avatar: "", text: "우리 쿠키 13살인데 예전처럼 오래 못 걸어요 천천히 냄새 맡는 시간이라도 충분히 기다려줘야겠네요", likes: 2201, time: "2일 전", replies: [] },
      { id: "c12", user: "first_pet", avatar: "", text: "처음 키울 땐 좋은 사료랑 장난감만 사주면 되는 줄 알았어요 결국 제일 좋아한 건 제가 바닥에 앉아서 같이 놀아주는 거였음", likes: 1578, time: "2일 전", replies: [] },
      { id: "c13", user: "miss_you_toto", avatar: "", text: "토토 보내고 나서 빈집에 들어갈 때마다 현관에서 들리던 발소리가 생각나요 있을 때 한 번 더 안아줄걸", likes: 3389, time: "2일 전", replies: [
        { id: "r1", user: "little_star", avatar: "", text: "토토는 매일 현관까지 달려갈 만큼 행복했을 거예요 좋은 기억으로 오래 함께해 주세요", likes: 544, time: "1일 전" },
      ] },
      { id: "c14", user: "gomgom_walk", avatar: "", text: "비 온다고 춥다고 자꾸 산책 미뤘는데 얘한테는 그 하루 산책이 제일 큰 행사였겠구나", likes: 876, time: "2일 전", replies: [] },
      { id: "c15", user: "puppy_smile", avatar: "", text: "저 얼굴로 쳐다보면 아무것도 못 하겠어ㅠ 너무 귀엽고 순하고 사랑스럽다", likes: 412, time: "1일 전", replies: [] },
      { id: "c16", user: "working_mom_choi", avatar: "", text: "아이 키우고 일하느라 반려견은 늘 마지막 순서가 된 것 같아 미안해요 사실 첫째 아이나 다름없었는데", likes: 1765, time: "1일 전", replies: [
        { id: "r1", user: "two_babies_home", avatar: "", text: "저도 같은 상황이에요 아기랑 강아지 같이 짧게 산책 나가니 모두 좋아하더라고요", likes: 238, time: "1일 전" },
      ] },
      { id: "c17", user: "seoul_dogpark", avatar: "", text: "휴대폰 보는 30분은 금방 쓰면서 산책 30분은 왜 그렇게 길게 느껴졌을까 반성합니다", likes: 2890, time: "1일 전", replies: [] },
      { id: "c18", user: "oldfriend_kkami", avatar: "", text: "까미가 아플 때 회사 일이 바쁘다고 병원도 부모님께 부탁했는데 마지막 날 곁에 못 있었던 게 평생 마음에 남아요", likes: 2467, time: "1일 전", replies: [
        { id: "r1", user: "dont_blame_you", avatar: "", text: "까미는 마지막 하루가 아니라 함께 산 모든 날의 사랑을 기억했을 겁니다", likes: 701, time: "23시간 전" },
      ] },
      { id: "c19", user: "walk_is_date", avatar: "", text: "산책을 의무라고 생각했는데 강아지랑 하는 데이트라고 생각하니 마음이 달라졌어요", likes: 1344, time: "23시간 전", replies: [] },
      { id: "c20", user: "tiny_paws", avatar: "", text: "쪼그만 발로 졸졸 따라오는 거 너무 귀여움ㅠ 저 존재가 사람을 이렇게까지 사랑해 준다는 게 신기해", likes: 967, time: "22시간 전", replies: [] },
      { id: "c21", user: "student_and_maru", avatar: "", text: "시험기간마다 마루가 놀아달라고 하면 밀어냈는데 오늘 시험 끝나자마자 공원 데려가려고요 기다려줘서 고마워", likes: 624, time: "21시간 전", replies: [] },
      { id: "c22", user: "grandma_puppy", avatar: "", text: "할머니가 돌아가시고 강아지가 며칠 동안 할머니 방 앞에서 기다렸어요 그 모습이 아직도 너무 슬퍼요", likes: 1876, time: "20시간 전", replies: [
        { id: "r1", user: "soft_cloud", avatar: "", text: "강아지도 가족을 잃은 걸 알고 기다렸던 거겠죠 읽기만 해도 눈물이 나네요", likes: 329, time: "19시간 전" },
      ] },
      { id: "c23", user: "home_early_today", avatar: "", text: "이 영상 보고 약속 취소하고 집에 일찍 갑니다 우리 애랑 놀아주는 게 오늘 제일 중요한 약속임", likes: 3104, time: "18시간 전", replies: [] },
      { id: "c24", user: "dubu_is_cute", avatar: "", text: "두부도 저렇게 고개 갸웃하는데 진짜 심장 아프게 귀여워요 강아지들은 본인이 귀여운 걸 알까", likes: 553, time: "17시간 전", replies: [] },
      { id: "c25", user: "sorry_and_love", avatar: "", text: "미안하다고 말하면 꼬리부터 흔드는 게 더 미안함... 서운했던 것도 바로 잊고 또 좋아해 주잖아요", likes: 2721, time: "16시간 전", replies: [] },
      { id: "c26", user: "rainy_day_memory", avatar: "", text: "무지개다리 건넌 우리 별이도 현관 소리만 나면 뛰어나왔는데 영상 보다가 한참 울었네요 보고 싶다", likes: 1622, time: "15시간 전", replies: [
        { id: "r1", user: "star_in_sky", avatar: "", text: "별이라는 이름처럼 지금도 가장 밝은 곳에서 기다리고 있을 거예요", likes: 287, time: "14시간 전" },
      ] },
      { id: "c27", user: "remote_worker", avatar: "", text: "재택근무하면서 같이 있는 시간이 많아졌는데 옆에 있다는 이유로 오히려 제대로 놀아주진 않았네요 오늘은 컴퓨터 끄고 같이 나가야지", likes: 841, time: "13시간 전", replies: [] },
      { id: "c28", user: "one_more_hug", avatar: "", text: "강아지 키우는 분들 지나가면서 한 번 더 쓰다듬어 주세요 그 한 번이 나중에는 제일 그리워집니다", likes: 3560, time: "12시간 전", replies: [] },
      { id: "c29", user: "sunday_with_song", avatar: "", text: "우리 송이는 산책이라는 말만 해도 빙글빙글 돌아요 피곤하다고 미뤘던 제가 너무했네요", likes: 478, time: "11시간 전", replies: [] },
      { id: "c30", user: "heartcollector", avatar: "", text: "귀여운 영상인 줄 알고 들어왔다가 눈물만 한 바가지 흘리고 갑니다ㅠ", likes: 1210, time: "10시간 전", replies: [] },
      { id: "c31", user: "bye_my_friend", avatar: "", text: "출장이 잦아 늘 가족에게 맡겼고 돌아오면 다음에 놀자고 했어요 그런데 그 다음이 오기 전에 아이가 떠났습니다 시간이 많을 줄 알았던 게 가장 큰 착각이었어요", likes: 4328, time: "9시간 전", replies: [
        { id: "r1", user: "warm_memory", avatar: "", text: "기다렸던 시간까지도 아이에게는 사랑하는 가족을 기다리는 행복이었을 거예요", likes: 604, time: "8시간 전" },
      ] },
      { id: "c32", user: "family_means_all", avatar: "", text: "반려동물은 취미가 아니라 가족이라는 말이 정말 맞아요 바쁠 때도 가족은 뒤로 미루면 안 되는 건데", likes: 925, time: "7시간 전", replies: [] },
      { id: "c33", user: "goodboy_goodgirl", avatar: "", text: "세상 모든 강아지들이 아프지 말고 사랑만 듬뿍 받았으면 좋겠다", likes: 2178, time: "6시간 전", replies: [] },
      { id: "c34", user: "after_work_walk", avatar: "", text: "야근하고 집 오면 쓰러져 자기 바빴는데 오늘부터 15분이라도 꼭 같이 걷기로 약속함", likes: 389, time: "5시간 전", replies: [] },
      { id: "c35", user: "miss_my_mango", avatar: "", text: "망고야 그때 내가 조금만 덜 바빴다면 더 많이 안아줬을 텐데 미안하고 사랑해 무지개다리에서 꼭 다시 만나자", likes: 2087, time: "4시간 전", replies: [
        { id: "r1", user: "meet_again", avatar: "", text: "망고는 분명 제일 먼저 달려와서 반겨줄 거예요", likes: 344, time: "3시간 전" },
      ] },
      { id: "c36", user: "today_is_precious", avatar: "", text: "나중에 잘해줘야지가 아니라 오늘 잘해줘야 한다는 걸 알려주는 영상이네요", likes: 1489, time: "2시간 전", replies: [] },
      ...DOG_EXTRA_COMMENTS,
    ],
  },
  {
    id: "4",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    channel: { name: "코딩하는 태호", handle: "@taehodev", avatarUrl: CHANNEL_AVATARS.taeho, verified: true },
    title: "JavaScript 이거 모르면 면접 탈락 🔥 #코딩 #개발 #자바스크립트 #취업",
    music: "신입 개발자 면접에서 가장 많이 틀리는 JavaScript 질문",
    likes: 89100, comments: 2103, shares: 5678,
    comments_data: [
      { id: "c1", user: "취준생", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jobseeker", text: "면접에서 실제로 저 질문 받았는데 대답 못했어요 ㅠㅠ", likes: 343, time: "5일 전",
        replies: [{ id: "r1", user: "코딩하는 태호", avatar: CHANNEL_AVATARS.taeho, text: "이제 알았으니까 다음엔 잘 하실 수 있어요! 화이팅 💪", likes: 112, time: "5일 전" }],
      },
      { id: "c2", user: "주니어개발자", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=junior", text: "클로저 개념이 항상 헷갈렸는데 이렇게 설명하니 이해됐어요!", likes: 289, time: "3일 전", replies: [] },
      { id: "c3", user: "CS전공자", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=csmajor", text: "호이스팅도 다뤄주실 수 있나요?", likes: 134, time: "2일 전", replies: [] },
    ],
  },
  {
    id: "5",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    channel: { name: "뷰티 by 하은", handle: "@haeunbeauty", avatarUrl: CHANNEL_AVATARS.haeun, verified: false },
    title: "5분 완성 데일리 메이크업 ✨ #뷰티 #메이크업 #데일리룩 #꿀팁",
    music: "초보도 실패 없는 데일리 메이크업 풀버전",
    likes: 45600, comments: 678, shares: 1890,
    comments_data: [
      { id: "c1", user: "뷰린이", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=beautybegin", text: "파운데이션 브랜드가 뭐예요? 완전 자연스러워요", likes: 134, time: "6일 전",
        replies: [{ id: "r1", user: "뷰티 by 하은", avatar: CHANNEL_AVATARS.haeun, text: "맥 스튜디오 핏 써요! 커버력이 최고예요 😊", likes: 67, time: "6일 전" }],
      },
      { id: "c2", user: "메이크업러버", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=makeuper", text: "쌍꺼풀 없는 사람도 할 수 있는 버전도 알려주세요!", likes: 178, time: "4일 전", replies: [] },
      { id: "c3", user: "직장인A", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=worker", text: "출근 전에 5분이면 진짜 되나요?? 도전해봐야겠다", likes: 92, time: "2일 전", replies: [] },
    ],
  },
];

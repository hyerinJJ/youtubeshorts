const V1 = "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-c8d40f29-6388-47b9-80ba-c0024aff547d_fQxU6h62.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS1jOGQ0MGYyOS02Mzg4LTQ3YjktODBiYS1jMDAyNGFmZjU0N2RfZlF4VTZoNjIubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTcyMTk3OCwiZXhwIjoxODEzMjU3OTc4fQ.b_1IhU-xiKkJD_VYVLQZNWmtB8fJ0seWn9Om-O_rqx0";
const V2 = "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-20fe131f-5399-4e09-a404-a70f8d3ed0c0_PBf2TKN8.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS0yMGZlMTMxZi01Mzk5LTRlMDktYTQwNC1hNzBmOGQzZWQwYzBfUEJmMlRLTjgubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTM3MTc1NCwiZXhwIjoxODEyOTA3NzU0fQ.rIkhDhz_biFNK2PCABjwyCnnZjENpVdRSSUZDlKtgoc";

const V_IDOL = "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-b2b8d8f6-3f26-4eda-8682-e331c9311df7_lSqMAn5S.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS1iMmI4ZDhmNi0zZjI2LTRlZGEtODY4Mi1lMzMxYzkzMTFkZjdfbFNxTUFuNVMubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTM3MTkxMiwiZXhwIjoxODEyOTA3OTEyfQ.OW-Vo_b9e_PG-JQm7NVpL9xQiPK-K7w21JusgCRMXQI";

const V3 = "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-d4181b64-eb45-44bd-b87e-85f0e97e477d_prC15CdU.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS1kNDE4MWI2NC1lYjQ1LTQ0YmQtYjg3ZS04NWYwZTk3ZTQ3N2RfcHJDMTVDZFUubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MTcyMTYwMiwiZXhwIjoxODEzMjU3NjAyfQ.fuNjjf5gF1ae65-Iusnh0SMBd82IZ9twKxXlBEuH518";

const CHANNEL_AVATARS = {
  moviecookie: "https://picsum.photos/seed/moviecookie-film/160/160",
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
    videoUrl: V2,
    channel: {
      name: "편맛",
      handle: "@pyeonmat",
      avatarUrl: CHANNEL_AVATARS.pyeonmat,
      verified: false,
    },
    title: "외국인들이 이걸 진짜 좋아한다고? 🏪 #편의점 #편맛 #koreanfood #불닭볶음면",
    music: "외국인이 뽑은 한국 편의점 음식 TOP 10",
    likes: 12000,
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
    id: "2",
    videoUrl: V_IDOL,
    channel: {
      name: "아이돌리스트",
      handle: "@idollist",
      avatarUrl: CHANNEL_AVATARS.idollist,
      verified: false,
    },
    title: "세현 이 장면 레전드인 이유 🔥 #세현 #아이돌 #직캠 #레전드",
    music: "세현 무대 직캠 풀버전｜레전드 순간 모음",
    likes: 58400,
    comments: 812,
    shares: 4102,
    comments_data: [
      { id: "c0a", user: "prvbnzmq", avatar: "", text: "1빠다", likes: 0, time: "6일 전", replies: [] },
      { id: "c0b", user: "kwlxjqbz", avatar: "", text: "2빠는 못참지ㅠ", likes: 0, time: "6일 전", replies: [] },
      { id: "c0c", user: "tmxqnbzv", avatar: "", text: "3빠ㅠㅠ 늦었다", likes: 0, time: "6일 전", replies: [] },
      { id: "c1", user: "xkptmvqr", avatar: "", text: "숏츠 보다가 여기까지 왔는데 알고리즘 오늘 신이었다 ㄹㅇ 구독 박고 갑니다", likes: 1842, time: "6일 전",
        replies: [
          { id: "r1", user: "bnzrqlfw", avatar: "", text: "ㅇㅈ 알고리즘 고마워서 댓글 달고 감", likes: 234, time: "6일 전" },
          { id: "r2", user: "jdvhspkm", avatar: "", text: "잘 오셨어요 여기 세현 영상 다 명작임", likes: 56, time: "5일 전" },
        ],
      },
      { id: "c2", user: "wlnfqzbt", avatar: "", text: "얼굴이 왜 저래 진짜 인간이 맞냐고 뇌가 녹는 수준 ㄹㅇ", likes: 1230, time: "6일 전",
        replies: [
          { id: "r1", user: "pqrmzxkj", avatar: "", text: "ㄹㅇ 저게 사람임? 비현실적으로 생겼어", likes: 189, time: "5일 전" },
          { id: "r2", user: "zlhqbntv", avatar: "", text: "피지컬 말이 안 됨 진짜", likes: 78, time: "5일 전" },
        ],
      },
      { id: "c3", user: "rvndpjls", avatar: "", text: "I wasn't supposed to be here but the algorithm dragged me in 😭😭 now I'm 3 hours deep", likes: 890, time: "5일 전",
        replies: [
          { id: "r1", user: "idollist", avatar: "", text: "Welcome!! We have plenty more 🥹", likes: 67, time: "5일 전" },
          { id: "r2", user: "kxwqmfbt", avatar: "", text: "join the club you can never escape lol", likes: 34, time: "4일 전" },
        ],
      },
      { id: "c4", user: "hqmzkxbt", avatar: "", text: "7년 덕질하면서 이런 거 처음 봄ㅠ 세현아 고마워 오늘도 버텼다 ㄹㅇ", likes: 743, time: "5일 전",
        replies: [
          { id: "r1", user: "vbnqrlsm", avatar: "", text: "저도요ㅜㅜ 힘든 날 세현 보면 그냥 버텨짐", likes: 123, time: "5일 전" },
          { id: "r2", user: "wkxmqrzt", avatar: "", text: "7년이면 찐팬이다 존경함 진짜", likes: 45, time: "4일 전" },
        ],
      },
      { id: "c5", user: "fzbnqrkx", avatar: "", text: "0:23 저 부분 50번은 돌려봄 눈빛이 레전드임 저만 그런 거 아니겠지", likes: 567, time: "5일 전",
        replies: [
          { id: "r1", user: "qxvnbkrz", avatar: "", text: "ㄹㅇ 그 파트 진짜 소름이잖아 계속 돌려봄", likes: 89, time: "5일 전" },
          { id: "r2", user: "tjkxvmnq", avatar: "", text: "0:23 YES that part is everything 😭😭", likes: 45, time: "4일 전" },
        ],
      },
      { id: "c6", user: "lhwpqrmt", avatar: "", text: "세현 팬들 솔직히 좀 이상한 거 아님? 뇌 빠진 거 아닌지 ㄹㅇ 그냥 평균 아이돌인데 과대평가가 심함", likes: 34, time: "4일 전",
        replies: [
          { id: "r1", user: "bvkrqpms", avatar: "", text: "뭘 안다고 와서 떠드는 건지 직캠 조회수 1위인데 평균이 어딨음", likes: 456, time: "4일 전" },
          { id: "r2", user: "jwnqxvtz", avatar: "", text: "세현 영상에서 이러는 거 좀 웃기지 않냐고 차단이나 박으세요", likes: 312, time: "3일 전" },
          { id: "r3", user: "lhwpqrmt", avatar: "", text: "의견도 못 말하나요 팬덤이 왜 이래", likes: 12, time: "3일 전" },
          { id: "r4", user: "mkptzrwx", avatar: "", text: "의견이랑 악플은 다름 ㄹㅇ 팩트도 없이 깎아내리면 당연히 반응 오는 거죠", likes: 234, time: "2일 전" },
        ],
      },
      { id: "c7", user: "dkwnzqbt", avatar: "", text: "이거 보고 입덕 각이다 아 또 빠지겠네 진짜 망함 🔥", likes: 445, time: "4일 전",
        replies: [
          { id: "r1", user: "nxqvkrmt", avatar: "", text: "같이 망해요 환영합니다 이미 늦었음", likes: 189, time: "3일 전" },
          { id: "r2", user: "qbvznjlt", avatar: "", text: "나만 그런 게 아니었구나 저도 오늘 입덕함", likes: 67, time: "3일 전" },
        ],
      },
      { id: "c8", user: "xvnzqmkb", avatar: "", text: "Stumbled upon this and genuinely cannot function 😭 she is so unreal I've been on loop for hours", likes: 2143, time: "3일 전",
        replies: [
          { id: "r1", user: "jlhqmntx", avatar: "", text: "Same omg I had plans today and now look at me 💀", likes: 412, time: "3일 전" },
          { id: "r2", user: "rqkzmxvb", avatar: "", text: "why is she so perfect 😭 I need her whole discography NOW", likes: 3, time: "2일 전" },
        ],
      },
      { id: "c9", user: "tnwmkxqv", avatar: "", text: "저만 소름인가요 세현 눈빛 보는 순간 심장 멈춤 ㄹㅇ 이건 반칙이잖아", likes: 523, time: "3일 전",
        replies: [
          { id: "r1", user: "vkxqjnzm", avatar: "", text: "저도요ㅠ 나만 그런 게 아니었구나 진짜로", likes: 67, time: "2일 전" },
        ],
      },
      { id: "c10", user: "bhrqxnzm", avatar: "", text: "팬들아 냉정하게 이번 앨범 성적 봤음? 거품 빠지는 거 아닌지 ㄹㅇ", likes: 29, time: "3일 전",
        replies: [
          { id: "r1", user: "pjkzrxwq", avatar: "", text: "마케팅 문제지 세현 잘못이 어딨음 그리고 팬미팅 3분 매진인데 거품이 어딨어요", likes: 345, time: "3일 전" },
          { id: "r2", user: "qwzmxkrv", avatar: "", text: "와서 왜 이러는 거임 진짜 신고 박고 갑니다", likes: 234, time: "2일 전" },
          { id: "r3", user: "bhrqxnzm", avatar: "", text: "팬들 왜 이렇게 예민함 그냥 한 말인데", likes: 8, time: "2일 전" },
          { id: "r4", user: "nkbzxqwm", avatar: "", text: "그냥 한 말치고 악의가 너무 느껴지는데요^^ 차단 박고 갑니다", likes: 445, time: "1일 전" },
        ],
      },
      { id: "c11", user: "xqvnmzrk", avatar: "", text: "0:47 저 표정 미쳤다 진짜 이 파트만 백 번은 본 것 같음 자야 되는데 계속 돌려봄ㅠ", likes: 389, time: "2일 전",
        replies: [
          { id: "r1", user: "mxkqrznv", avatar: "", text: "ㄹㅇ 그 파트 진짜 다른 레벨이잖아", likes: 56, time: "2일 전" },
        ],
      },
      { id: "c12", user: "fzxqknvr", avatar: "", text: "How is nobody talking about how insane this stage presence is?? 🫠", likes: 7, time: "2일 전",
        replies: [
          { id: "r1", user: "kqxvnzmb", avatar: "", text: "SAME she just has something that can't be taught 🔥", likes: 2, time: "2일 전" },
        ],
      },
      { id: "c13", user: "tbxqnzmk", avatar: "", text: "왜 아이돌 영상마다 와서 악플 다는 거임 진짜 본인 최애나 보러 가세요", likes: 178, time: "2일 전",
        replies: [
          { id: "r1", user: "vxnqkzmr", avatar: "", text: "ㅇㅈ 신고하고 무시하면 됩니다", likes: 134, time: "2일 전" },
          { id: "r2", user: "jqxzmvkn", avatar: "", text: "반응 주면 알고리즘에 뜨니까 그냥 신고만 박으세요", likes: 89, time: "1일 전" },
        ],
      },
      { id: "c14", user: "dxqnvkzm", avatar: "", text: "팬사인회에서 실물 봤는데 ㄹㅇ 영상이 실물의 절반도 못 담은 거 맞음😭 실제로 보면 진짜 기절함", likes: 1987, time: "1일 전",
        replies: [
          { id: "r1", user: "hqxzmkvn", avatar: "", text: "부럽습니다ㅠ 저는 추첨에서 계속 떨어져서... 언젠간 꼭", likes: 4, time: "1일 전" },
        ],
      },
      { id: "c15", user: "pxqvkzmn", avatar: "", text: "우리 세현이 오늘도 열일 세현아 제발 나 좀 봐줘 팬사 뽑아줘 제발ㅠ", likes: 267, time: "1일 전",
        replies: [
          { id: "r1", user: "nqxvzmkb", avatar: "", text: "같이 당첨되자 몇 년째 떨어지는 건지ㅠ", likes: 34, time: "1일 전" },
        ],
      },
      { id: "c16", user: "yrbnqzxv", avatar: "", text: "이 채널 왜 이제 발견함 ㄹㅇ 구독 박고 알림 설정까지 했음 🔥", likes: 334, time: "1일 전",
        replies: [
          { id: "r1", user: "idollist", avatar: "", text: "감사합니다!!! 세현 영상 계속 올릴게요 🥹", likes: 45, time: "23시간 전" },
        ],
      },
      { id: "c17", user: "pnkxvqzr", avatar: "", text: "요즘 진짜 너무 힘들었는데 세현 이거 보고 다시 힘냄 ㄹㅇ 고마워ㅠ", likes: 489, time: "22시간 전",
        replies: [
          { id: "r1", user: "ltwnmbqx", avatar: "", text: "저도요ㅜㅜ 같이 버텨봐요 💪", likes: 89, time: "21시간 전" },
        ],
      },
      { id: "c18", user: "dqxvnzbm", avatar: "", text: "피지컬이 말이 안 됨 저 키에 저 비율에 저 얼굴까지 이게 사람임? 🫠", likes: 2089, time: "9시간 전",
        replies: [
          { id: "r1", user: "wqxvnzbm", avatar: "", text: "ㄹㅇ 현실에 존재하는 게 신기한 레벨이잖아", likes: 287, time: "8시간 전" },
        ],
      },
      { id: "c19", user: "pqrxknzv", avatar: "", text: "완성형 아이돌이다 ㄹㅇ 비주얼 실력 퍼포 다 갖춘 거 이런 거 얼마만에 보는 건지", likes: 1756, time: "16시간 전", replies: [] },
      { id: "c20", user: "qxbnvzmk", avatar: "", text: "0:23 저 부분 진짜 레전드 세현 눈빛이 장난 아님 저만 소름인가요", likes: 89, time: "2시간 전",
        replies: [
          { id: "r1", user: "bxnqvzmk", avatar: "", text: "ㅇㅈ 그 파트 볼 때마다 소름ㅠ 나만 그런 게 아니었구나", likes: 12, time: "1시간 전" },
        ],
      },
    ],
  },
  {
    id: "3",
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
    id: "4",
    videoUrl: "https://ktyvniablmkiawvhzoii.supabase.co/storage/v1/object/sign/videos/copy-f338d540-9e07-413b-b6d9-6588e5363d80-1_qj7JfiwI.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MmFhN2NjOS0yODMyLTQ4OGEtODlhOS1hMDM5ZjIxMjYxNWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvY29weS1mMzM4ZDU0MC05ZTA3LTQxM2ItYjZkOS02NTg4ZTUzNjNkODAtMV9xajdKZml3SS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMzgyMzEyLCJleHAiOjE4MTI5MTgzMTJ9.6PieRTLrgHJlWCodD6Q3BO1YKmXJCo5HCllobeEYtpw",
    channel: { name: "감동집합소", handle: "@kamdongcollector", avatarUrl: CHANNEL_AVATARS.kamdongcollector, verified: false },
    title: "바쁘다는 이유로 자꾸 미뤘던 산책, 강아지는 언제나 우리만 기다리고 있었습니다 🐶 #강아지 #반려견 #감동영상 #가족",
    music: "강아지가 평생 기억하는 보호자의 행동 7가지",
    likes: 12800, comments: 639, shares: 742,
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
    id: "5",
    videoUrl: V3,
    channel: {
      name: "무비쿠키",
      handle: "@moviecookie",
      avatarUrl: CHANNEL_AVATARS.moviecookie,
      verified: false,
    },
    title: "신인 배우 뺨 만지는 애드립에 최정식이 맞받아친 방법 🎬 #악의전이 #최정식 #연기 #넷플릭스",
    music: "넷플릭스 악의 전이 레전드 장면 모음｜최정식 역대급 애드립 대처",
    likes: 47200,
    comments: 891,
    shares: 6340,
    comments_data: [
      { id: "c0a", user: "mvck_01", avatar: "", text: "1빠", likes: 0, time: "4일 전", replies: [] },
      { id: "c0b", user: "mvck_02", avatar: "", text: "2빠다ㄷㄷ", likes: 0, time: "4일 전", replies: [] },
      { id: "c1", user: "cine_lover_k", avatar: "", text: "최정식 선생님 저 상황에서 저런 대사가 나오는 게 말이 됩니까 진짜 레전드 맞아요 소름 돋음", likes: 4823, time: "4일 전",
        replies: [
          { id: "r1", user: "drama_fan_j", avatar: "", text: "ㄹㅇ 즉흥으로 저 대사가 나온다는 게 얼마나 내공이 깊은 분인지", likes: 892, time: "4일 전" },
          { id: "r2", user: "actor_nerd_p", avatar: "", text: "연기 20년 이상 하신 분이라 그게 가능한 거죠 진짜 경력이 몸에 배인 것", likes: 456, time: "3일 전" },
        ],
      },
      { id: "c2", user: "shock_10kg", avatar: "", text: "잠깐 최정식 배우님이 이 작품 위해서 살을 10kg이나 찌우셨다고요?? 그 몸이 원래 몸이 아니었던 거임??", likes: 6102, time: "4일 전",
        replies: [
          { id: "r1", user: "moviecookie", avatar: "", text: "네 맞아요!! 캐릭터 표현 위해 의도적으로 증량하셨어요 그것도 레전드 포인트 중 하나예요 🎬", likes: 1234, time: "4일 전" },
          { id: "r2", user: "health_respect_m", avatar: "", text: "배우가 캐릭터 위해 몸을 저렇게까지 바꾸다니 진짜 프로 중에 프로다", likes: 789, time: "3일 전" },
          { id: "r3", user: "wow_factor_s", avatar: "", text: "10kg 증량이 얼마나 힘든 건지 알면서도 작품을 위해 하신 거잖아요 진심 존경", likes: 567, time: "3일 전" },
        ],
      },
      { id: "c3", user: "rude_rookie_mad", avatar: "", text: "신인 배우가 선배 뺨을 만지는 게 애드립으로 통한다고?? 그거 그냥 싸가지 없는 거 아님 ㄹㅇ 어디서 배운 거야", likes: 3841, time: "4일 전",
        replies: [
          { id: "r1", user: "agree_100", avatar: "", text: "동의함 아무리 애드립이라도 선배 배우 신체에 손대는 건 선 넘은 거죠", likes: 1203, time: "3일 전" },
          { id: "r2", user: "actor_etiquette", avatar: "", text: "연기 현장 에티켓 기본 중 기본인데 신체 접촉은 사전 협의가 필수라고 배우잖아요", likes: 934, time: "3일 전" },
          { id: "r3", user: "defend_rookie_x", avatar: "", text: "그래도 현장 분위기 띄우려고 한 거 아닐까요 너무 몰아붙이지 마요", likes: 78, time: "3일 전" },
          { id: "r4", user: "no_excuse_y", avatar: "", text: "분위기 띄우는 것도 방법이 있죠 선배 배우 허락도 없이 손대는 건 아니에요", likes: 892, time: "2일 전" },
        ],
      },
      { id: "c4", user: "choi_personality", avatar: "", text: "최정식 선생님 평소에도 후배들한테 정말 잘 챙겨주시는 분이라고 유명하던데 이 장면에서도 느껴지네요", likes: 2934, time: "3일 전",
        replies: [
          { id: "r1", user: "industry_insider", avatar: "", text: "맞아요 세트장에서 스태프들한테도 진짜 예의 바르게 대하신다고 들었어요", likes: 678, time: "3일 전" },
          { id: "r2", user: "respect_senior", avatar: "", text: "저런 분이 선배 배우이어야 후배들이 제대로 배우죠", likes: 445, time: "2일 전" },
        ],
      },
      { id: "c5", user: "netflix_fan_a", avatar: "", text: "악의 전이 정주행하다가 이 장면에서 입 떡 벌어짐 최정식 배우님 진짜 넘사벽이다", likes: 2178, time: "3일 전",
        replies: [
          { id: "r1", user: "binge_watch_b", avatar: "", text: "저도 저 장면에서 멈추고 두 번 더 봤어요 ㄹㅇ 소름 돋음", likes: 312, time: "3일 전" },
        ],
      },
      { id: "c6", user: "ad_lib_god", avatar: "", text: "저 순간에 저런 대사가 나오는 게 즉흥인 게 믿기지가 않는다 뇌가 다른 분이심", likes: 3102, time: "3일 전", replies: [] },
      { id: "c7", user: "newbie_dislike", avatar: "", text: "신인 배우 이름이 뭔데 저런 짓을 함 ㄹㅇ 연기보다 에티켓부터 배워야 할 것 같은데", likes: 1567, time: "3일 전",
        replies: [
          { id: "r1", user: "fair_point_z", avatar: "", text: "공개적으로 이름 거론하기 보단 그냥 최정식 선생님 대처에 집중하는 게 낫지 않을까요", likes: 234, time: "2일 전" },
          { id: "r2", user: "still_mad_c", avatar: "", text: "그래도 저게 허락된 애드립인지 그냥 선 넘은 건지는 확인해봐야 하지 않나요", likes: 345, time: "2일 전" },
        ],
      },
      { id: "c8", user: "weight_gain_wow", avatar: "", text: "10kg 증량하고 저런 연기력까지 진짜 이 작품에 모든 걸 쏟아부으신 거네 대단하다", likes: 1834, time: "2일 전", replies: [] },
      { id: "c9", user: "pro_actor_talk", avatar: "", text: "진짜 프로는 위기 상황에서 빛나는 거라는 말을 저 장면에서 느꼈어요 편집 안 하고 살린 게 맞죠?", likes: 2341, time: "2일 전",
        replies: [
          { id: "r1", user: "moviecookie", avatar: "", text: "실제로 감독님이 저 장면 보고 NG 안 내고 바로 오케이 하셨다고 해요 🎬", likes: 567, time: "2일 전" },
          { id: "r2", user: "director_choice", avatar: "", text: "감독님 판단이 탁월하다 저 장면을 살린 게 영화의 명장면이 된 거잖아요", likes: 312, time: "1일 전" },
        ],
      },
      { id: "c10", user: "rude_behavior_d", avatar: "", text: "신인이면 더 조심해야지 왜 그러는 건지 진짜 이해 안 됨 선배 배우한테 뺨을 만져요?", likes: 1923, time: "2일 전",
        replies: [
          { id: "r1", user: "same_anger_e", avatar: "", text: "ㄹㅇ 저게 자유로운 표현이 아니라 그냥 예의 없는 거임", likes: 678, time: "2일 전" },
        ],
      },
      { id: "c11", user: "kind_senior_f", avatar: "", text: "최정식 선생님이 그냥 화내거나 중단시키지 않고 저렇게 대사로 받아넘기신 게 진짜 품격이다", likes: 2567, time: "2일 전", replies: [] },
      { id: "c12", user: "10kg_dedication", avatar: "", text: "작품 위해 10kg 증량, 현장에서 즉흥 대사로 위기 커버... 이런 배우가 진짜 배우죠", likes: 3124, time: "1일 전",
        replies: [
          { id: "r1", user: "true_actor_g", avatar: "", text: "ㄹㅇ 작품에 대한 헌신과 현장 경험치가 만들어낸 결과물임", likes: 445, time: "1일 전" },
          { id: "r2", user: "respect_all_h", avatar: "", text: "저런 분이 있어야 한국 드라마 수준이 올라가는 거죠", likes: 312, time: "1일 전" },
        ],
      },
      { id: "c13", user: "netflix_recommend", avatar: "", text: "악의 전이 안 보신 분들 이 장면 때문에라도 보세요 진짜 최정식 배우님 미쳤음", likes: 1678, time: "1일 전", replies: [] },
      { id: "c14", user: "character_praise_i", avatar: "", text: "예전에 인터뷰에서 최정식 선생님이 스태프들 이름 다 외우고 생일도 챙겨준다고 들었는데 진짜 그런 분이실 것 같음", likes: 1934, time: "1일 전",
        replies: [
          { id: "r1", user: "warm_person_j", avatar: "", text: "ㄹㅇ 현장에서 막내 스태프한테도 허리 굽혀 인사한다는 얘기도 들었어요", likes: 523, time: "23시간 전" },
          { id: "r2", user: "moviecookie", avatar: "", text: "맞아요 현장에서 정평이 나 있는 분이에요 🎬 실력이랑 인성 둘 다 최고", likes: 389, time: "22시간 전" },
        ],
      },
      { id: "c15", user: "impromptu_master", avatar: "", text: "저 대사 즉흥이라는 게 믿기지가 않는다 보통 사람이면 당황해서 멈추거나 NG냈을 텐데", likes: 2102, time: "23시간 전", replies: [] },
      { id: "c16", user: "rookie_manners", avatar: "", text: "아무리 분위기 메이커 하고 싶어도 선배 배우 얼굴에 손대는 건 진짜 아닌 것 같아요 기본 예의를 모르는 건지", likes: 1456, time: "22시간 전",
        replies: [
          { id: "r1", user: "etiquette_check", avatar: "", text: "연기 학원에서 그런 것도 안 가르쳐주나요 기본 중의 기본인데", likes: 345, time: "21시간 전" },
        ],
      },
      { id: "c17", user: "scene_rewatch", avatar: "", text: "이 장면만 열 번은 본 것 같음 볼 때마다 소름이 돋음 최정식 선생님 진짜 대배우", likes: 1789, time: "21시간 전", replies: [] },
      { id: "c18", user: "weight_method_k", avatar: "", text: "10kg 찌우는 것도 배우의 건강을 위험에 빠뜨리는 건데 그걸 감수하고 하신 거잖아요 작품에 대한 헌신이 대단함", likes: 2234, time: "19시간 전",
        replies: [
          { id: "r1", user: "health_concern_l", avatar: "", text: "요요 오실까봐 걱정되기도 하는데 그런 것도 다 감수하고 하신 거라 더 존경스러워요", likes: 189, time: "18시간 전" },
        ],
      },
      { id: "c19", user: "drama_reaction_m", avatar: "", text: "악의 전이 보면서 최정식 선생님 장면마다 입이 안 다물어짐 이 분이 없었으면 이 드라마 반도 못 됐다고 생각해요", likes: 2678, time: "17시간 전", replies: [] },
      { id: "c20", user: "bad_rookie_anger", avatar: "", text: "신인 배우가 저런 짓을 했으면 감독이나 제작진에서 제지를 했어야 하는 거 아닌가요 최정식 선생님이 혼자 감당하신 거잖아요", likes: 1923, time: "15시간 전",
        replies: [
          { id: "r1", user: "production_issue_n", avatar: "", text: "맞아요 제작진 측에서도 관리가 안 된 것 같은데 최정식 선생님이 수습하신 거죠", likes: 567, time: "14시간 전" },
          { id: "r2", user: "lesson_learned_o", avatar: "", text: "저 신인 배우가 이 장면 보고 많이 배웠으면 좋겠어요 진짜", likes: 312, time: "13시간 전" },
        ],
      },
      { id: "c21", user: "movie_buff_p", avatar: "", text: "이 채널 덕분에 악의 전이 정주행 시작했습니다 최정식 배우님 팬 됐어요", likes: 1234, time: "12시간 전",
        replies: [
          { id: "r1", user: "moviecookie", avatar: "", text: "오오 잘 결정하셨어요!! 후회 없으실 거예요 😄🎬", likes: 234, time: "11시간 전" },
        ],
      },
      { id: "c22", user: "class_difference", avatar: "", text: "신인이랑 최정식 선생님 사이의 연기 내공 차이가 이 한 장면에 다 담겨있음 진짜", likes: 1567, time: "10시간 전", replies: [] },
      { id: "c23", user: "proud_fan_q", avatar: "", text: "최정식 선생님이 한국 배우라는 게 자랑스럽다 진짜 이런 분이 있어서 한드 수준이 높아지는 거죠", likes: 2012, time: "8시간 전", replies: [] },
      { id: "c24", user: "10kg_again", avatar: "", text: "근데 진짜로 10kg이요?? 저 장면만 보고 왔다가 이 댓글 보고 충격받음", likes: 1789, time: "6시간 전",
        replies: [
          { id: "r1", user: "moviecookie", avatar: "", text: "네 실제로 촬영 전에 의도적으로 증량하셨어요!! 캐릭터 때문에요 🎬", likes: 456, time: "5시간 전" },
          { id: "r2", user: "dedication_wow_r", avatar: "", text: "그러면 저 체형이 원래 체형이 아닌 거네요 와 배우라는 게 정말 대단한 직업이다", likes: 312, time: "4시간 전" },
        ],
      },
      { id: "c25", user: "subscribe_now_s", avatar: "", text: "이 채널 구독했습니다 이런 장면 계속 발굴해줘서 감사해요 몰랐던 장면이었는데", likes: 678, time: "3시간 전", replies: [] },
      { id: "c26", user: "last_comment_t", avatar: "", text: "명장면 발굴해주셔서 감사해요 최정식 선생님 진짜 대배우셨구나를 다시 한번 느낌", likes: 445, time: "1시간 전",
        replies: [
          { id: "r1", user: "moviecookie", avatar: "", text: "앞으로도 이런 숨은 명장면 계속 가져올게요 🎬✨", likes: 189, time: "30분 전" },
        ],
      },
    ],
  },
];

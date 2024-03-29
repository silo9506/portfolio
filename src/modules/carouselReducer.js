import { createSlice } from "@reduxjs/toolkit";
import todo from "assets/img/todos.PNG";
import movies from "assets/img/movies.png";
import insta from "assets/img/instar.PNG";
import youtube from "assets/img/youtube.PNG";
import fullpage from "assets/img/fullpage.png";
import html from "assets/img/html.png";
import css from "assets/img/css.png";
import js from "assets/img/js.png";
import react from "assets/img/react.png";
import firebase from "assets/img/firebase.png";
import redux from "assets/img/redux.png";
const work = [
  {
    img: todo,
    url: "https://silo9506.github.io/mui_todo/",
    git: "https://github.com/silo9506/mui_todo",
    Description: {
      title: "투두리스트",
      Objectives: "커스텀 훅 활용,mui를 통한 다크모드 구현,타입스크립트 사용 ",
      Feature: "할일 저장 및 완료 표시 및 항목삭제",
      skill: [html, css, js],
    },
  },
  {
    img: movies,
    url: "https://silo9506.github.io/movieAndBook/",
    git: "https://github.com/silo9506/movieAndBook",
    Description: {
      title: "M&B 영화 및 도서검색사이트",
      Objectives: "무한스크롤 및 페이지네이션을통한 영화 및 북 검색 및 탐색",
      Feature: "영화 및 도서 검색",
      skill: [html, css, js, react],
    },
  },
  {
    img: insta,
    url: "https://silo9506.github.io/insta-react/",
    git: "https://github.com/silo9506/insta-react",
    Description: {
      title: "인스타그램",
      Objectives: "NoSQL DB사용하여 회원가입 및 게시글 작성기능 만들기하여 회원가입 및 게시글 작성기능 만들기",
      Feature: "회원가입, auth권한을 통한 파일 업로드 및 삭제",
      skill: [html, css, js, react, firebase],
    },
  },
  {
    img: youtube,
    url: "https://silo9506.github.io/youtube-redux-react/",
    git: "https://github.com/silo9506/youtube-redux-react",
    Description: {
      title: "유튜브",
      Objectives: "api를 활용하여 검색 및 동영상 재생사이트 제작, redux를 사용하여 상태관리",
      Feature: "동영상 검색 및 시청",
      skill: [html, css, js, redux, react],
    },
  },
  {
    img: fullpage,
    git: "https://github.com/silo9506/react-page",
    url: "https://silo9506.github.io/react-page/",
    Description: {
      title: "서울 동물복지지원센터",
      Objectives: "오픈api활용, 라이브러리 사용,",
      Feature: "웹 페이지 구성 및 스크롤을 통한 페이지 이동",
      skill: [html, css, js, react, redux],
    },
  },
  {
    img: todo,
    url: "https://silo9506.github.io/mui_todo/",
    git: "https://github.com/silo9506/mui_todo",
    Description: {
      title: "투두리스트",
      Objectives: "커스텀 훅 활용,mui를 통한 다크모드 구현,타입스크립트 사용 ",
      Feature: "할일 저장 및 완료 표시 및 항목삭제",
      skill: [html, css, js],
    },
  },
  {
    img: movies,
    url: "https://silo9506.github.io/movieAndBook/",
    git: "https://github.com/silo9506/movieAndBook",
    Description: {
      title: "M&B 영화 및 도서검색사이트",
      Objectives: "무한스크롤 및 페이지네이션을통한 영화 및 북 검색 및 탐색",
      Feature: "영화 및 도서 검색",
      skill: [html, css, js, react],
    },
  },
  {
    img: insta,
    url: "https://silo9506.github.io/insta-react/",
    git: "https://github.com/silo9506/insta-react",
    Description: {
      title: "인스타그램",
      Objectives: "NoSQL DB사용하여 회원가입 및 게시글 작성기능 만들기",
      Feature: "회원가입, auth권한을 통한 파일 업로드 및 삭제",
      skill: [html, css, js, react, firebase],
    },
  },
  {
    img: youtube,
    url: "https://silo9506.github.io/youtube-redux-react/",
    git: "https://github.com/silo9506/youtube-redux-react",
    Description: {
      title: "유튜브",
      Objectives: "api를 활용하여 검색 및 동영상 재생사이트 제작, redux를 사용하여 상태관리",
      Feature: "동영상 검색 및 시청",
      skill: [html, css, js, redux, react],
    },
  },
  {
    img: fullpage,
    git: "https://github.com/silo9506/react-page",
    url: "https://silo9506.github.io/react-page/",
    Description: {
      title: "서울 동물복지지원센터",
      Objectives: "오픈api활용, 라이브러리 사용,",
      Feature: "웹 페이지 구성 및 스크롤을 통한 페이지 이동",
      skill: [html, css, js, react, redux],
    },
  },
  {
    img: todo,
    url: "https://silo9506.github.io/mui_todo/",
    git: "https://github.com/silo9506/mui_todo",
    Description: {
      title: "투두리스트",
      Objectives: "커스텀 훅 활용,mui를 통한 다크모드 구현,타입스크립트 사용 ",
      Feature: "할일 저장 및 완료 표시 및 항목삭제",
      skill: [html, css, js],
    },
  },
  {
    img: movies,
    url: "https://silo9506.github.io/movieAndBook/",
    git: "https://github.com/silo9506/movieAndBook",
    Description: {
      title: "M&B 영화 및 도서검색사이트",
      Objectives: "무한스크롤 및 페이지네이션을통한 영화 및 북 검색 및 탐색",
      Feature: "영화 및 도서 검색",
      skill: [html, css, js, react],
    },
  },
  {
    img: insta,
    url: "https://silo9506.github.io/insta-react/",
    git: "https://github.com/silo9506/insta-react",
    Description: {
      title: "인스타그램",
      Objectives: "NoSQL DB사용하여 회원가입 및 게시글 작성기능 만들기",
      Feature: "회원가입, auth권한을 통한 파일 업로드 및 삭제",
      skill: [html, css, js, react, firebase],
    },
  },
  {
    img: youtube,
    url: "https://silo9506.github.io/youtube-redux-react/",
    git: "https://github.com/silo9506/youtube-redux-react",
    Description: {
      title: "유튜브",
      Objectives: "api를 활용하여 검색 및 동영상 재생사이트 제작, redux를 사용하여 상태관리",
      Feature: "동영상 검색 및 시청",
      skill: [html, css, js, redux, react],
    },
  },
  {
    img: fullpage,
    git: "https://github.com/silo9506/react-page",
    url: "https://silo9506.github.io/react-page/",
    Description: {
      title: "서울 동물복지지원센터",
      Objectives: "오픈api활용, 라이브러리 사용,",
      Feature: "웹 페이지 구성 및 스크롤을 통한 페이지 이동",
      skill: [html, css, js, react, redux],
    },
  },
];

const initialState = {
  counte: 0,
  max: Math.floor(work.length / 3),
  trans: false,
  work,
};

const carouselSlice = createSlice({
  name: "carouselReducer",
  initialState,
  reducers: {
    carouselMove: (state, action) => {
      if (action.payload === "up") {
        state.counte = ++state.counte;
        state.trans = true;
      } else {
        state.counte = --state.counte;
        state.trans = true;
      }
    },
    carouselLastMove: (state, action) => {
      if (action.payload === "up") {
        state.counte = 0;
        state.trans = false;
      } else {
        state.counte = state.max - 1;
        state.trans = false;
      }
    },
  },
});

export const carouselActions = carouselSlice.actions;
export default carouselSlice.reducer;

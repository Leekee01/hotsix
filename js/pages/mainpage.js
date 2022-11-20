import {
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  orderBy,
  query,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { dbService, authService } from "../firebase.js";

export const save_comment = async (event) => {
  event.preventDefault();
  const comment = document.getElementById("comment");
  const { uid, photoURL, displayName } = authService.currentUser;
  try {
    await addDoc(collection(dbService, "comments"), {
      text: comment.value,
      createdAt: Date.now(),
      creatorId: uid,
      profileImg: photoURL,
      nickname: displayName,
    });
    comment.value = "";
    getCommentList();
  } catch (error) {
    alert(error);
    console.log("error in addDoc:", error);
  }
};

export const onEditing = (event) => {
  // 수정버튼 클릭
  event.preventDefault();
  const udBtns = document.querySelectorAll(".editBtn, .deleteBtn");
  udBtns.forEach((udBtn) => (udBtn.disabled = "true"));

  const cardBody = event.target.parentNode.parentNode;
  const commentText = cardBody.children[0].children[0];
  const commentInputP = cardBody.children[0].children[1];

  commentText.classList.add("noDisplay");
  commentInputP.classList.add("d-flex");
  commentInputP.classList.remove("noDisplay");
  commentInputP.children[0].focus();
};

export const update_comment = async (event) => {
  event.preventDefault();
  const newComment = event.target.parentNode.children[0].value;
  const id = event.target.parentNode.id;

  const parentNode = event.target.parentNode.parentNode;
  const commentText = parentNode.children[0];
  commentText.classList.remove("noDisplay");
  const commentInputP = parentNode.children[1];
  commentInputP.classList.remove("d-flex");
  commentInputP.classList.add("noDisplay");

  const commentRef = doc(dbService, "comments", id);
  try {
    await updateDoc(commentRef, { text: newComment });
    getCommentList();
  } catch (error) {
    alert(error);
  }
};

export const delete_comment = async (event) => {
  event.preventDefault();
  const id = event.target.name;
  const ok = window.confirm("해당 응원글을 정말 삭제하시겠습니까?");
  if (ok) {
    try {
      await deleteDoc(doc(dbService, "comments", id));
      getCommentList();
    } catch (error) {
      alert(error);
    }
  }
};

export const getCommentList = async () => {
  let cmtObjList = [];
  const q = query(
    collection(dbService, "comments"),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const commentObj = {
      id: doc.id,
      ...doc.data(),
    };
    cmtObjList.push(commentObj);
  });
  const commnetList = document.getElementById("comment-list");
  const currentUid = authService.currentUser.uid;
  commnetList.innerHTML = "";
  cmtObjList.forEach((cmtObj) => {
    const isOwner = currentUid === cmtObj.creatorId;
    const temp_html = `<div class="card commentCard">
          <div class="card-body">
              <blockquote class="blockquote mb-0">
                  <p class="commentText">${cmtObj.text}</p>
                  <p id="${
                    cmtObj.id
                  }" class="noDisplay"><input class="newCmtInput" type="text" maxlength="30" /><button class="updateBtn" onclick="update_comment(event)">완료</button></p>
                  <footer class="quote-footer"><div>BY&nbsp;&nbsp;<img class="cmtImg" width="50px" height="50px" src="${
                    cmtObj.profileImg
                  }" alt="profileImg" /><span>${
      cmtObj.nickname ?? "닉네임 없음"
    }</span></div><div class="cmtAt">${new Date(cmtObj.createdAt)
      .toString()
      .slice(0, 25)}</div></footer>
              </blockquote>
              <div class="${isOwner ? "updateBtns" : "noDisplay"}">
                   <button onclick="onEditing(event)" class="editBtn btn btn-dark">수정</button>
                <button name="${
                  cmtObj.id
                }" onclick="delete_comment(event)" class="deleteBtn btn btn-dark">삭제</button>
              </div>            
            </div>
     </div>`;
    const div = document.createElement("div");
    div.classList.add("mycards");
    div.innerHTML = temp_html;
    commnetList.appendChild(div);
  });
};

$(document).ready(function () {
  new Swiper(".container .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    autoplay: true,
    delay: 5000,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "progressbar", //동그라미 버튼을 진행상황을 나타내는 바로 변경
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });

  // 어떻게 구현해야 할지 아무리 머리 굴려도 떠오르지 않아 모조리 넣었습니다. . .
  // for이나 if문으로 li의 index를 추출할 수 있으면 좋겠는데. . .

  function onClick1() {
    $(".sub_menu>li:nth-child(1)").addClass("active");

    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick2() {
    $(".sub_menu>li:nth-child(2)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick3() {
    $(".sub_menu>li:nth-child(3)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick4() {
    $(".sub_menu>li:nth-child(4)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick5() {
    $(".sub_menu>li:nth-child(5)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick6() {
    $(".sub_menu>li:nth-child(6)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick7() {
    $(".sub_menu>li:nth-child(7)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick8() {
    $(".sub_menu>li:nth-child(8)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick9() {
    $(".sub_menu>li:nth-child(9)").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
    $(".sub_menu>li:nth-child(10)").removeClass("active");
  }

  function onClick10() {
    $(".sub_menu>li:nth-child(10").addClass("active");

    $(".sub_menu>li:nth-child(1)").removeClass("active");
    $(".sub_menu>li:nth-child(3)").removeClass("active");
    $(".sub_menu>li:nth-child(4)").removeClass("active");
    $(".sub_menu>li:nth-child(5)").removeClass("active");
    $(".sub_menu>li:nth-child(6)").removeClass("active");
    $(".sub_menu>li:nth-child(7)").removeClass("active");
    $(".sub_menu>li:nth-child(8)").removeClass("active");
    $(".sub_menu>li:nth-child(9)").removeClass("active");
    $(".sub_menu>li:nth-child(2)").removeClass("active");
  }

  document
    .querySelector(".sub_menu>li:nth-child(1)")
    .addEventListener("click", onClick1);
  document
    .querySelector(".sub_menu>li:nth-child(2)")
    .addEventListener("click", onClick2);
  document
    .querySelector(".sub_menu>li:nth-child(3)")
    .addEventListener("click", onClick3);
  document
    .querySelector(".sub_menu>li:nth-child(4)")
    .addEventListener("click", onClick4);
  document
    .querySelector(".sub_menu>li:nth-child(5)")
    .addEventListener("click", onClick5);
  document
    .querySelector(".sub_menu>li:nth-child(6)")
    .addEventListener("click", onClick6);
  document
    .querySelector(".sub_menu>li:nth-child(7)")
    .addEventListener("click", onClick7);
  document
    .querySelector(".sub_menu>li:nth-child(8)")
    .addEventListener("click", onClick8);
  document
    .querySelector(".sub_menu>li:nth-child(9)")
    .addEventListener("click", onClick9);
  document
    .querySelector(".sub_menu>li:nth-child(10)")
    .addEventListener("click", onClick10);
});

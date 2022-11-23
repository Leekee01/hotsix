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
  const comment = document.getElementById("text_icon");
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
  const ok = window.confirm("해당 글을 정말 삭제하시겠습니까?");
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
  const commnetList = document.getElementById("all_post_list");
  const currentUid = authService.currentUser.uid;
  commnetList.innerHTML = "";
  cmtObjList.forEach((cmtObj) => {
    const isOwner = currentUid === cmtObj.creatorId;
    const temp_html = `
                        <div class="all_post_list">
                          <div class="profile">
                            <div class="profile_img" id="profile_img">
                              <img src="${
                                cmtObj.profileImg ?? "/assets/blankProfile.webp"
                              }"  alt="profile_img"/>
                            </div>

                            <div class="line_1">
                              <p>
                                <span class="profile_name" id="profile_name">${
                                  cmtObj.nickname ?? "닉네임 없음"
                                }</span>님이 글을
                                공유하셨습니다.
                              </p>

                              <p class="time">${new Date(cmtObj.createdAt)
                                .toString()
                                .slice(0, 25)}</p>
                            </div>

                            <p class="follow">팔로우</p>
                          </div>

                          <div class="see_posting">
                            <div class="text_wrap">
                              <p>${cmtObj.text}</p>
                            </div>
                            <div class="${isOwner ? "buttons" : "noDisplay"}">
                              <button onclick="onEditing(event)" class="editBtn btn btn-dark">
                                수정
                              </button>
                              <button
                                name="${cmtObj.id}"
                                onclick="delete_comment(event)"
                                class="deleteBtn btn btn-dark"
                              >
                                삭제
                              </button>
                            </div>
                          </div>
                      </div>
                          `;

    const div = document.createElement("div");
    div.classList.add("mycards");
    div.innerHTML = temp_html;
    commnetList.appendChild(div);
  });

  const { photoURL } = authService.currentUser;
  const commentImage = document.getElementById("profile_img");
  commentImage.innerHTML = "";

  const temp_html2 = `
                        <div class="profile_img" id="profile_img">
                          <img
                            src="${photoURL ?? "/assets/blankProfile.webp"}"
                            id="profileImg"
                            alt="profile_img"
                          />
                        </div>
                      `;
  const img = document.createElement("div");
  img.classList.add("photo");
  img.innerHTML = temp_html2;
  commentImage.appendChild(img);
};

export const creatSwiper = () => {
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
};

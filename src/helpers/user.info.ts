export function saveUserInfo(data: any) {
  localStorage.removeItem("userProfile");
  localStorage.removeItem("token");
  localStorage.setItem("userProfile", JSON.stringify(data.user));
  localStorage.setItem("token", data.token);
}

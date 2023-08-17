import {
  useNavigation,
  useActionData,
  redirect,
  useNavigate,
} from "react-router-dom";
import { signupUser } from "../../assets/firebase/auth";
import { userDefaults } from "../../assets/userDefaults";
import { createNewUser } from "../../assets/firebase/utils";
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const data = { username, email, password };

  try {
    const userEmailAndUid = await signupUser(data);
    const userDefault = userDefaults({ username, ...userEmailAndUid });
    await createNewUser(userDefault);
    return redirect("/login");
  } catch (err) {
    return err.message.split("(")[1];
  }
}
export default function Registration() {
  const actionData = useActionData();
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submissionState = state == "submitting";
  return (
    <div className="h-screen flex items-center justify-center dark:bg-black">
      <div class="container rounded-md dark:bg-slate-900 dark:border-0">
        <img src="/instagram-text.png" className="mx-auto w-40" />
        <div class="content">
          <i
            role="img"
            class=""
            aria-label="Instagram"
            data-visualcompletion="css-img"
          ></i>
          <Form method="post" class="content__form">
            {actionData && (
              <small className="text-red-700 text-xs">
                *{actionData.substring(0, actionData.length - 2)}
              </small>
            )}
            <div class="content__inputs">
              <label>
                <input required="" type="text" name="username" />
                <span>Username</span>
              </label>
              <label>
                <input required="" type="text" name="email" />
                <span>Phone number, or email</span>
              </label>
              <label>
                <input required="" type="password" name="password" />
                <span>Password</span>
              </label>
            </div>
            <button
              type="submit"
              className="relative"
              disabled={submissionState ? true : false}
            >
              <FontAwesomeIcon
                icon={faCircleNotch}
                className={`absolute left-2 ${
                  submissionState ? "block" : "hidden"
                }`}
                spin={submissionState ? true : false}
              />
              {submissionState ? "Signing In" : "Sign In"}
            </button>
          </Form>
          <div class="content__or-text">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div class="content__forgot-buttons">
            <button onClick={() => navigate("/login")}>
              Have an account? Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

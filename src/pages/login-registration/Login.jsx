import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { signInUser } from "../../assets/firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = { email, password };
  try {
    await signInUser(data);
    return redirect("/");
  } catch (err) {
    return err.message.split("(")[1];
  }
}

export default function Login() {
  const actionData = useActionData();
  const { state } = useNavigation();
  const submissionState = state == "submitting";
  return (
    <div className="h-screen flex items-center justify-center dark:bg-black">
      <div class="container dark:bg-slate-900 rounded-md dark:border-0">
        <img src="/instagram-text.png" className="mx-auto w-40" />
        <div class="content">
          <Form method="post" class="content__form">
            {actionData && (
              <small className="text-red-700 text-xs">
                *{actionData.substring(0, actionData.length - 2)}
              </small>
            )}
            <div class="content__inputs">
              <label>
                <input required="" type="text" name="email" />
                <span>Phone number, username, or email</span>
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
                className={`absolute left-2 
                ${submissionState ? "block" : "hidden"}`}
                spin={submissionState ? true : false}
              />
              {submissionState ? "Logging In" : "Log In"}
            </button>
          </Form>
          <div class="content__or-text">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div class="content__forgot-buttons">
            <button>Forgot password?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

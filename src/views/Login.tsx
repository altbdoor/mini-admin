import { FC, FormEvent, useEffect, useState } from "react";
import { users } from "../data/users";
import { delay } from "../data/delay";
import { useNavigate } from "react-router-dom";
import { randNumber } from "@ngneat/falso";

export const Login: FC = () => {
  useEffect(() => {
    document.title = "Login - Mini admin";
  }, []);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const formData = new FormData(event.target as HTMLFormElement);
    const dataObj = Object.fromEntries(formData.entries());

    const isValidUser = users.some(
      (tmpUser) =>
        tmpUser.username === dataObj.username &&
        tmpUser.password === dataObj.password,
    );
    await delay(randNumber({ min: 500, max: 2000 }));

    if (!isValidUser) {
      setIsError(true);
    } else {
      navigate("/dashboard/home");
    }

    setIsLoading(false);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3>Login</h3>

              {isError && (
                <div className="alert alert-danger my-3">
                  Invalid login credentials, please try again
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <fieldset disabled={isLoading}>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Login
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

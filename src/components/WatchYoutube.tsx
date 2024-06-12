import { FC, FormEvent } from "react";
import { youtubeVideos } from "../data/videos";

export const WatchYoutube: FC = () => {
  const watchYoutubeVideo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const url = formData.get("youtubeVideo") as string;

    if (url) {
      window.open(url);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3>Video selector</h3>

        <form onSubmit={watchYoutubeVideo}>
          <div className="mb-3">
            <select className="form-control" name="youtubeVideo">
              {youtubeVideos.map((vid) => (
                <option value={vid.url} key={vid.url}>
                  {vid.label}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-primary" type="submit">
            Open video in new tab
          </button>
        </form>
      </div>
    </div>
  );
};

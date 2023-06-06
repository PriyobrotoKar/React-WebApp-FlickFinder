import React from "react";

const Description = ({ data, loading, url, credits, creditsLoading }) => {
  const directors = credits?.crew
    ?.filter((f) => f.job === "Director" || f.department === "Directing")
    .slice(0, 3);
  const writers = credits?.crew
    ?.filter(
      (f) =>
        f.job === "Writer" ||
        f.job === "Screenplay" ||
        f.job === "Story" ||
        f.job === "Staff Writer" ||
        f.department === "Writing"
    )
    ?.map((writer) => {
      return writer?.name;
    })
    ?.filter((item, ind, arr) => arr.indexOf(item) === ind);
  console.log(writers);
  return (
    <div className="mt-28  px-4 lg:px-10 gap-4 lg:gap-40 justify-between flex flex-col lg:flex-row">
      {!loading && (
        <>
          <div className="flex-[1.2_1_0%]">
            <h2 className="text-neutral-500 text-xl font-medium">
              Description
            </h2>
            <p className="text-neutral-700 dark:text-neutral-100 text-base">
              {data.overview}
            </p>
          </div>
          <div className="flex gap-4 lg:gap-16 justify-between [&>*]:flex-1 flex-1">
            <div>
              <h2 className="text-neutral-500 text-xl font-medium">Director</h2>
              <div className="text-neutral-700 dark:text-neutral-100 text-base">
                {directors?.map((d, i) => {
                  return (
                    <span>
                      {d.name}
                      {directors.length - 1 == i ? "" : ", "}
                    </span>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-neutral-500 text-xl font-medium">Writers</h2>
              <div className="text-neutral-700 dark:text-neutral-100 text-base">
                {writers?.map((w, i) => {
                  return (
                    <span>
                      {w}
                      {writers.length - 1 == i ? "" : ", "}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Description;

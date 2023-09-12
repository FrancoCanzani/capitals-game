export default function CountryInformationSkeleton() {
  return (
    <div className="animate-fade animate-ease-in-out animate-duration-[400] mt-6 flex w-full flex-col items-start">
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="flex animate-pulse items-center justify-center gap-2">
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-slate-100"></div>
          <div className="h-2 w-8 rounded-md bg-slate-100"></div>
        </div>
        <div className="h-2 w-10 rounded-md bg-slate-100"></div>
      </div>
      <div className="flex w-full flex-col items-start justify-start space-y-3 shadow-2xl shadow-amber-50 dark:shadow-none lg:flex-row lg:space-x-6 lg:space-y-0">
        <div className="relative h-52 w-full animate-pulse rounded-md bg-slate-100 lg:w-1/2"></div>
        <div className="h-52 w-full max-w-full gap-2 text-start text-sm capitalize lg:w-1/2">
          <div className="mb-2 flex h-7 max-w-full gap-1 rounded-md bg-slate-700 px-2 py-1 text-gray-100 dark:text-gray-200"></div>
          <div className="mb-2 flex h-7 max-w-full animate-pulse items-center gap-1 rounded-md bg-slate-100 px-2 py-1"></div>
          <div className="mb-2 flex h-7 max-w-full animate-pulse items-center gap-1 rounded-md bg-slate-100 px-2 py-1"></div>
          <div className="mb-2 flex h-7 max-w-full animate-pulse items-center gap-1 rounded-md bg-slate-100 px-2 py-1"></div>
          <div className="mb-2 flex h-7 max-w-full animate-pulse items-center gap-1 rounded-md bg-slate-100 px-2 py-1"></div>
          <div className="mb-2 flex h-7 max-w-full animate-pulse items-center gap-1 rounded-md bg-slate-100 px-2 py-1"></div>
        </div>
      </div>
    </div>
  );
}

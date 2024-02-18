export const navbarStyle: object = {
  wrapper: "relative w-full flex items-center justify-between",
  container: "flex items-center min-w-0",
  inner: "min-w-0",
  base: "group relative w-full flex items-center gap-1.5 px-2 py-3 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",
  before:
    "before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-100 dark:hover:before:bg-gray-800/50",
  after:
    "after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",
  active:
    "text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",
  inactive:
    "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
  label: "truncate relative font-serif",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    active: "text-gray-700 dark:text-gray-200",
    inactive:
      "text-gray-700 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200",
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs",
  },
  badge: {
    base: "flex-shrink-0 ml-auto relative rounded",
    color: "gray",
    variant: "solid",
    size: "xs",
  },
};

export const cardStyle: object = {
  base: "",
  background: "bg-white",
  divide: "divide",
  ring: "ring-1 ring-gray-200 dark:ring-gray-700",
  rounded: "rounded-lg",
  shadow: "shadow-lg",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:p-4",
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-4",
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-4",
  },
};

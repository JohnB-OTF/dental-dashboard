const useGetFirstDayMonth = () => {
  //get current date
  const currentDate = new Date()
  return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
}

export default useGetFirstDayMonth

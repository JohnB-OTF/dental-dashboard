const useSecondsToString = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  hours = hours < 10 ? `0${hours}` : hours
  const minutes = Math.floor((seconds % 3600) / 60)
  minutes = minutes < 10 ? `0${minutes}` : minutes
  const secondsLeft = seconds % 60
  secondsLeft = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft
  return `${hours}:${minutes}:${secondsLeft.toFixed()}`
}

export default useSecondsToString

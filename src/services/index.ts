import { ajaxWrapper } from '../helpers/ajaxWrapper'
import makeToast from '../helpers/Toaster'

import { urls } from '../helpers/constant'

export const login = (data: any) => {
  const url = `${urls.USER}/login`
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  })
    .then((data) => {
      makeToast('success', data.data.message)
      return data
    })
    .catch((err) => {
      if (err && err.response && err.response.data && err.response.data.message)
        makeToast('error', err.response.data.message)
      return err.response
    })
}

export const registration = (data: any) => {
  const url = `${urls.USER}/register`
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  })
    .then((data) => {
      makeToast('success', data.data.message)
      return data
    })
    .catch((err) => {
      if (err && err.response && err.response.data && err.response.data.message)
        makeToast('error', err.response.data.message)
      return err.response
    })
}

export const postChatRoom = (data: any) => {
  const url = `${urls.CHATROOM}`
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('CC_Token'),
    },
  })
    .then((data) => {
      makeToast('success', data.data.message)
      return data
    })
    .catch((err) => {
      if (err && err.response && err.response.data && err.response.data.message)
        makeToast('error', err.response.data.message)

      return err.response
    })
}

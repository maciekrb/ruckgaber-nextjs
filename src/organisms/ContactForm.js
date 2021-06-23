import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Grow, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import {GreenPaper, RedPaper, YellowPaper} from '../atoms/GreenPaper'
import log from 'loglevel'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useTranslations } from 'next-intl'

// Email validation REGEX (StackOverflow ref)
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const useStyles = makeStyles((theme) => ({
  root: {
    'textAlign': 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '80%',
    },
  },
}))

const ContactForm = () => {
  const classes = useStyles()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [names, setNames] = useState('')
  const [namesError, setNamesError] = useState()
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState()
  const [subject, setSubject] = useState('')
  const [subjectError, setSubjectError] = useState()
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState()
  const [successMessageVisible, setSuccessMessageVisible] = useState(false)
  const [generalError, setGeneralError] = useState()
  const [busy, setBusy] = useState(false)
  const t = useTranslations('common')

  const validateNonEmpty = (value) => {
    return value && value.trim() !== ''
  }
  const validateNames = () => {
    if (!validateNonEmpty(names)) {
      setNamesError ('Please write your name')
      return false
    }
    setNamesError(undefined)
    return true
  }

  const validateEmail = () => {
    if (!re.test(String(email).toLowerCase())) {
      setEmailError('Please write a valid email')
      return false
    }
    setEmailError(undefined)
    return true
  }

  const validateSubject = () => {
    if (!validateNonEmpty(subject)) {
      setSubjectError('Please write the subject')
      return false
    }
    setSubjectError(undefined)
    return true
  }

  const validateMessage = () => {
    if (!validateNonEmpty(message)) {
      setMessageError('Please write a message')
      return false
    }
    setMessageError(undefined)
    return true
  }

  const handleSubmit = async () => {
    if (
      validateNames() &&
      validateEmail() &&
      validateSubject() &&
      validateMessage()
    ) {

      try {
        setBusy(true)
        const token = await executeRecaptcha("contact_form")
        const res = await fetch(`${process.env.REACT_APP_API_HOST}/contact-form`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-recaptcha-token': token,
          },
          body: JSON.stringify({
            contactName: names,
            contactEmail: email,
            subject: subject,
            message: message,
          })
        })
        setBusy(false)
        setSuccessMessageVisible(true)
        log.info('Message Sent', res)
        setGeneralError()
      } catch (error) {
        setBusy(false)
        log.warn("oops, error", error)
        setGeneralError("Please try again in a few seconds")
      }
    }
  }

  const handleResetForm = () => {
    setNames('')
    setEmail('')
    setSubject('')
    setMessage('')
    setSuccessMessageVisible(false)
  }

  return (
    <div className="contact-form">
      {successMessageVisible && (
        <Box pt={2}>
          <GreenPaper visible={!!successMessageVisible}>
            <Typography variant="h5" gutterBottom>
              {t('Su mensaje ha sido enviado')}
            </Typography>
            <Button onClick={handleResetForm} variant="contained">
              Ok
            </Button>
          </GreenPaper>
        </Box>
      )}
      <Grow in={!successMessageVisible}>
        <form noValidate autoComplete="off" className={classes.root}>
          <RedPaper visible={!!generalError}>{generalError}</RedPaper>
          <YellowPaper visible={!!busy}>{t('Enviando su mensaje')}</YellowPaper>
          <TextField
            id="names"
            label={t('Name and Surname')}
            required
            variant="filled"
            value={names}
            helperText={namesError}
            error={!!namesError}
            onChange={(ev) => {
              setNames(ev.target.value)
              validateNames()
            }}
          />
          <TextField
            id="email"
            label="Email"
            required
            value={email}
            variant="filled"
            helperText={emailError}
            error={!!emailError}
            onChange={(ev) => {
              setEmail(ev.target.value)
              validateEmail()
            }}
          />
          <TextField
            id="subject"
            label={t('Subject')}
            required
            value={subject}
            variant="filled"
            helperText={subjectError}
            error={!!subjectError}
            onChange={(ev) => {
              setSubject(ev.target.value)
              validateSubject()
            }}
          />
          <TextField
            id="message"
            label={t('Message')}
            required
            multiline
            rows={4}
            value={message}
            variant="filled"
            helperText={messageError}
            error={!!messageError}
            onChange={(ev) => {
              setMessage(ev.target.value)
              validateMessage()
            }}
          />

          <Box style={{ textAlign: 'center' }}>
            <Button variant="outlined" onClick={handleSubmit}>
              {t('Send')}
            </Button>
          </Box>
        </form>
      </Grow>
    </div>
  )
}

export default ContactForm

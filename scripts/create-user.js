#!/usr/bin/node

import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'

const user = 'moderator@moderator.com'
const password = 'password'
const salt = CryptoJS.lib.WordArray.random(128 / 8).toString()
const hashedPassword = CryptoJS.PBKDF2(password, salt, {
  keySize: 256 / 32,
}).toString()
// TODO add flag for admin
db.user.create({
  data: { email: user, hashedPassword, salt },
})

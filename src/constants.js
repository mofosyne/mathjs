'use strict'

import { factory } from './utils/factory'
import { version } from './version'
import {
  createBigNumberE,
  createBigNumberPhi,
  createBigNumberPi,
  createBigNumberTau
} from './utils/bignumber/constants'

export const createTrue = factory('true', [], () => true)
export const createFalse = factory('false', [], () => false)
export const createNull = factory('null', [], () => null)

export const createInfinity = factory(
  'Infinity',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber(Infinity)
    : Infinity
)

export const createNaN = factory(
  'NaN',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber(NaN)
    : NaN
)

export const createPi = factory(
  'pi',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? createBigNumberPi(BigNumber)
    : Math.PI
)

export const createTau = factory(
  'tau',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? createBigNumberTau(BigNumber)
    : (2 * Math.PI)
)

export const createE = factory(
  'e',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? createBigNumberE(BigNumber)
    : Math.E
)

// golden ratio, (1+sqrt(5))/2
export const createPhi = factory(
  'phi',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? createBigNumberPhi(BigNumber)
    : 1.61803398874989484820458683436563811772030917980576286213545
)

export const createLN2 = factory(
  'LN2',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber(2).ln()
    : Math.LN2
)

export const createLN10 = factory(
  'LN10',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber(10).ln()
    : Math.LN10
)

export const createLOG2E = factory(
  'LOG2E',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber(1).div(new BigNumber(2).ln())
    : Math.LOG2E
)

export const createLOG10E = factory(
  'LOG10E',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber(1).div(new BigNumber(10).ln())
    : Math.LOG10E
)

export const createSQRTHalf = factory(
  'SQRT1_2',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber('0.5').sqrt()
    : Math.SQRT1_2
)

export const createSQRT2 = factory(
  'SQRT2',
  ['config.number', 'type.BigNumber'],
  ({ config: { number }, type: { BigNumber } }) => (number === 'BigNumber')
    ? new BigNumber(2).sqrt()
    : Math.SQRT2
)

export const createI = factory(
  'i',
  ['type.Complex'],
  ({ type: { Complex } }) => Complex.I
)

export const createVersion = factory('version', [], () => version)

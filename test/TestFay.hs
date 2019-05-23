{-# LANGUAGE NoImplicitPrelude #-}

module TestFay where

import           Language.Fay.FFI
import           Language.Fay.Prelude

main = do
  -- 
  alert () -- (33::Int)  -- "hello!"

{-
t = do
  initProtocol -- (EndPoint Anonymous (At (B.pack [])))
  e <- exports "Finance.Data.CAPE.Hash_9b9b77711814be78c5cc09c59d301d9f0af1c523049684b978bbafc3d4dcda0d"
  putStrLn $ ppShow e
  putStrLn $ groom e

-}

alert :: (Foreign a,Show a) => a -> Fay ()
alert = ffi "alert(%1)"


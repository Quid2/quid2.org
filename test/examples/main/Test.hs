{-# LANGUAGE ForeignFunctionInterface, EmptyDataDecls ,DeriveDataTypeable #-}
module Test(RpcError(..),addN,firstPrimes,primesStr) where

-- | RPC error type
data RpcError
  = ServerError String     -- ^ Server error
  | ResultTypeError String -- ^ Result type mismatch
  | ProtocolError String   -- ^ Protocol error
  -- deriving (Read, Show, Eq, Ord, Typeable)


data Expr a = Add a a | Inc a | Add3 a a a 
               
  
  
addN :: Int -> Int -> Int -> Int
addN n1 n2 n3  = n1+n2+n3

firstPrimes :: String
firstPrimes = primesStr 7

primesStr :: Int -> String
primesStr n = show $ take n primes

primes :: [Int]
primes = sieve [2..]
  where sieve (x:xs) = x : sieve [y | y <- xs, y `mod` x /= 0]



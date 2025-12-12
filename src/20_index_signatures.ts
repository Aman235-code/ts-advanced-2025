

type NumberDict = {
    [k: string]: number
}

const counters: NumberDict = {}

counters['likes'] = 45
counters['comments'] = 2
counters['shares'] = 44

type Matrix = Record<'likes' | 'views' | 'shares', number>

const mm: Matrix = {
    likes:1, 
    views: 100,
    shares : 23
}

const priceMap = new Map<string,number>()
priceMap.set('likes', 1)

type LooseMap = Record<string, number | undefined>

const lm : LooseMap = {}

lm["x"] = undefined
lm["y"] = 66
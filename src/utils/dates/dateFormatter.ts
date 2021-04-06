function createFormatter(options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat('ru', options)
}

export { createFormatter }
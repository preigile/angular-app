function defaultSort (first, second) {
    if (first.status < second.status) return -1;
    if (first.code > second.code) return 1;
    if (first.status > second.status) return 1;
    if (first.code < second.code) return -1;

    return 0;
}

export default defaultSort;
